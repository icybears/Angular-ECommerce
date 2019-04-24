import { Component, OnInit, Input } from "@angular/core";
import { Produit } from "./Produit.interface";

@Component({
  selector: "produit",
  template: `

      <div class="card h-100">
        <a href="#"
          ><img class="card-img-top" src="http://placehold.it/700x400" alt=""
        /></a>
        <div class="card-body">
          <h4 class="card-title">
            <a [routerLink]="['/boutique/produits', produit.id]">{{ produit.nom }}</a>
          </h4>
          <h5>{{ produit.prix }}</h5>
          <p class="card-text">Description</p>
        </div>
        <div class="card-footer"></div>
      </div>

  `
})
export class ProduitComponent implements OnInit {
  @Input()
  produit: Produit;

  constructor() {}

  ngOnInit() {}
}
