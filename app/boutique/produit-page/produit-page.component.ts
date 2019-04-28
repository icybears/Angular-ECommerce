import { Component, OnInit, Input } from "@angular/core";
import { Produit } from "../produit/Produit.interface";
import { BoutiqueService } from "../boutique.service";
import { Categorie } from "../categorie/categorie.interface";
import { Router, ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "produit-page",
  template: `
    <div class="container">
    <div class="my-2">
      <button (click)="goBack()" class="btn btn-light btn-sm">
        &lsaquo; Retour
      </button>
    </div>
      <section class="my-2">
        <div class="product-details row">
          <h1 class="product-title col-12">
            {{ produit?.nom }}
          </h1>
          <div class="product-meta col-12 mb-3">
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fa fa-folder-open-o"></i> Categorie<a href="">{{
                  produit?.categorie.nom
                }}</a>
              </li>
              <li class="list-inline-item">
                <i class="fa fa-certificate"></i> Cooperative<a href="">{{
                  produit?.cooperative.nom
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 row">
            <div class="col-md-8 offset-md-2">
              <img
                class=" card-img-top"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <h3 class="tab-title">Description du Produit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia laudantium beatae quod perspiciatis, neque dolores eos
                  rerum, ipsa iste cum culpa numquam amet provident eveniet
                  pariatur, sunt repellendus quas voluptate dolor cumque autem
                  molestias.
                </p>
                <h3 class="mb-3">Prix: {{ produit?.prix }} DH</h3>
              </div>
            </div>

            <div>
              Quantite: <quantite (quantiteChanged)="getQuantite($event)"></quantite>
            </div>
            <a [routerLink]="['/boutique/panier']" [queryParams]="{ produit: produit?.id, quantite:quantite}" ><button class="btn btn-success btn-lg">Ajouter au panier</button></a>

            <hr>


          </div>
        </div>
      </section>

      <section class="mt-4">
        <h3 class="mb-4 mt-3 underline">Dans la même catégorie</h3>
        <div class="row">
          <produit
            class="col-lg-3 col-md-4 mb-4"
            *ngFor="let produit of produits"
            [produit]="produit"
            (click)="scrollToTop($event)"
          ></produit>
        </div>
      </section>
    </div>
  `
})
export class ProduitPageComponent implements OnInit {
  produit: Produit;

  quantite: number;

  produits: Produit[];

  produitsCooperative: Produit[];

  produitsCategorie: Produit[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boutiqueService: BoutiqueService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((data: any) => this.boutiqueService.getProduitById(data.id))
      .subscribe((data: Produit) => {
        this.produit = data;
        console.log("logging data", data);
        this.boutiqueService
          .getProduitsByCategorie(this.produit.categorie.id)
          .subscribe((data: Produit[]) => (this.produits = data));
      });
  }

  getQuantite(quantite: number){
    this.quantite = quantite;
    console.log(quantite);
  }

  goBack() {
    this.router.navigate(["/boutique"]);
  }

  scrollToTop(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
  }
}
