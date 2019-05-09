import { Component, OnInit, EventEmitter, Output, OnChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { BoutiqueService } from "../boutique.service";
import { Item } from "./item.class";
import { Produit } from "../produit/produit.interface";

@Component({
  selector: "panier",
  template: `
  <section class="container mt-3">
  <div class="py-2">
  <button (click)="goBack()" class="btn btn-light btn-sm"> &lsaquo; Continuer mes Achats</button>
  </div>
    <div class="col-md-8 offset-md-2 ">
      <!-- Recently Favorited -->
      <div class="widget dashboard-container my-adslist">
        <h3 class="">Mon Panier</h3>
        <table class="table table-responsive product-dashboard-table">
          <thead>
            <tr>
            <th class="text-center">Action</th>
              <th>Image</th>
              <th>Produit</th>
              <th class="text-center">Prix</th>
              <th class="text-center">Qte</th>
              <th class="text-center">Montant</th>

            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of items">
            <td class="action" data-title="Action">
                <div class="">
                  <ul class="list-inline justify-content-center">
                    <li class="list-inline-item">
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Tooltip on top"
                        class="view"
                        [routerLink]="['/boutique/produit', item.produit.id]"
                        target="_blank" >
                        <i class="fa fa-eye"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a (click)="remove(item.produit.id)" class="delete" href="javascript:void(0);">
                        <i class="fa fa-trash"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
              <td class="product-thumb">
                <img
                  width="80px"
                  height="auto"
                  src="https://via.placeholder.com/150"
                  alt="image description"
                />
              </td>

              <td class="product-details pl-2">
                <span class="">{{item.produit.nom}}</span>

              </td>
              <td class ="product-category">
                <span class="">{{item.produit.prix}} DH</span>
              </td>

              <td class="product-category">
                <span class="categories">
                  <input (change)="updateQuantite($event)" type="text" [value]="item.quantite" style="width:20px"/>
                  </span>
              </td>
              <td class="product-category">
                <span>{{ item.produit.prix * item.quantite }} DH</span>
              </td>

            </tr>
            <tr>
              <td colspan="5" align="right"><strong>Total</strong></td>
              <td class="text-center"><strong>{{ total }} DH</strong></td>
          </tr>
          <tr>
            <td colspan="6" align="right">
              <a href=""><button class="btn btn-success "><i class="fa fa-shopping-cart"></i> Confirmer</button></a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</section>


  `
})
export class PanierComponent implements OnInit, OnChanges {
  items: Item[] = [];
  total: number = 0;
  redirect: boolean = false;

  @Output()
  panierCount: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private boutiqueService: BoutiqueService,

  ) {}

  ngOnChanges() {
    this.loadCart();
  }

  ngOnInit() {
    this.route.queryParams
      .filter(params => true)
      .subscribe(params => {
        console.log(params['produit']);
        if(params['produit']){

        this.redirect = Boolean(params['produit'] || params['quantite']);
        let id = params['produit'];
        let quantite = params['quantite'] || 1;
        let item: Item = new Item();
        if (id > 0) {
          this.boutiqueService.getProduitById(id).subscribe((data: Produit) => {
            item.produit = data;
            item.quantite = quantite;
            // si nexiste pas, creation d'un panier dans local storage
            if (localStorage.getItem("panier") == null) {
              console.log("item", item);
              let panier: any = [];

              panier.push(JSON.stringify(item));
              console.log("panier", panier);
              localStorage.setItem("panier", JSON.stringify(panier));
            }
            // si panier existe deja
            else {
              let panier: any = JSON.parse(localStorage.getItem("panier"));

              let index: number = -1;
              for (var i = 0; i < panier.length; i++) {
                let item: Item = JSON.parse(panier[i]);
                // si le produit se trouve deja dans le panier
                if (item.produit.id == id) {
                  index = i;
                  break;
                }
              }
              // le produit ne se trouve pas dans le panier
              if (index == -1) {
                panier.push(JSON.stringify(item));
                localStorage.setItem("panier", JSON.stringify(panier));
              }
              //le produit se trouve dans le panier
              else {
                let item: Item = JSON.parse(panier[index]);
                item.quantite = Number(item.quantite) + Number(quantite);
                panier[index] = JSON.stringify(item);
                localStorage.setItem("panier", JSON.stringify(panier));
              }
            }
            this.loadCart();
          });

        } else {
          this.loadCart();
        }

        // if (this.redirect) {
        //   this.location.back();
        // }
      }
      });
  }

  loadCart(): number {
    this.total = 0;
    this.items = [];
    let panier = JSON.parse(localStorage.getItem("panier"));
    console.log(panier);
    if(panier){
    for (var i = 0; i < panier.length; i++) {
      let item = JSON.parse(panier[i]);
      this.items.push({
        produit: item.produit,
        quantite: item.quantite
      });
      this.total += item.produit.prix * item.quantite;
      this.panierCount.emit(this.items.length);
    }
    }
    return this.items.length;
  }

  remove(id: string): void {
    let panier: any = JSON.parse(localStorage.getItem("panier"));
    let index: number = -1;
    for (var i = 0; i < panier.length; i++) {
      let item: Item = JSON.parse(panier[i]);
      if (Number(item.produit.id) == Number(id)) {
        panier.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("panier", JSON.stringify(panier));
    this.loadCart();
  }

  updateQuantite(event) {

  }

  goBack() {
    this.router.navigate(["/boutique"]);
  }
}
