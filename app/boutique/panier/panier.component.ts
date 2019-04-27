import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { BoutiqueService } from "../boutique.service";
import { Item } from "./item.class";
import { Produit } from "../produit/produit.interface";

@Component({
  selector: "panier",
  template: `
    <h3>Cart Info</h3>
    <table border="1">
      <tr>
        <th>Option</th>
        <th>Id</th>
        <th>Name</th>
        <th>Photo</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Sub Total</th>
      </tr>
      <tr *ngFor="let item of items">
        <td align="center">
          <button (click)="remove(item.produit.id)">X</button>
        </td>
        <td>{{ item.produit.id }}</td>
        <td>{{ item.produit.nom }}</td>
        <td>
          <img src="https://via.placeholder.com/150" width="50" />
        </td>
        <td>{{ item.produit.prix }}</td>
        <td>{{ item.quantite }}</td>
        <td>{{ item.produit.prix * item.quantite }}</td>
      </tr>
      <tr>
        <td colspan="6" align="right">Total</td>
        <td>{{ total }}</td>
      </tr>
    </table>
  `
})
export class PanierComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;
  redirect: boolean = false;

  @Output()
  panierCount: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private boutiqueService: BoutiqueService,

  ) {}

  ngOnInit() {
    this.route.queryParams
      .filter(params => true)
      .subscribe(params => {
        console.log("params", params);
        console.log("params.produit", params.produit);
        this.redirect = Boolean(params.produit || params.quantite);
        let id = params.produit;
        let quantite = params.quantite || 1;
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
          });
          this.loadCart();
        } else {
          this.loadCart();
        }

        if(this.redirect){
          this.location.back();
        }
      });
  }


  loadCart(): void {
    this.total = 0;
    this.items = [];
    let panier = JSON.parse(localStorage.getItem("panier"));
    console.log(panier);
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
}
