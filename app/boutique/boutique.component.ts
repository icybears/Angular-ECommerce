import { Component, OnInit } from "@angular/core";
import { Produit } from "./produit/produit.interface";
import { BoutiqueService } from "./boutique.service";
import { Categorie } from "./categorie/categorie.interface";

@Component({
  selector: "boutique",
  template: `
    <div class="container">
      <div class="row">
        <!-- Left -->
        <div class="col-lg-3">
          <h1 class="my-4">Shop Name</h1>
          <div class="list-group" >
            <categorie [default]="true"
                (click)="setCategorie(null)"
            ></categorie>
            <categorie *ngFor="let categorie of categories"
              [categorie]="categorie"
              (click)="setCategorie(categorie)"
              ></categorie>

          </div>
        </div>

        <!-- Center -->
        <div class="col-lg-9">
          <div class="row">

              <produit class="col-lg-4 col-md-6 mb-4"
              *ngFor="let produit of produits"
              [produit]="produit"></produit>

          </div>
        </div>
      </div>
    </div>
  `
})
export class BoutiqueComponent implements OnInit {
  produits: Produit[];
  categories: Categorie[];
  constructor(private boutiqueService: BoutiqueService) {}

  ngOnInit() {
    this.boutiqueService
      .getProduits()
      .subscribe((data: Produit[]) => (this.produits = data));

    this.boutiqueService.
    getCategories()
    .subscribe((data: Produit[]) => (this.categories = data));

  }

  setCategorie(categorie: Categorie) {
    if(!categorie){
      this.boutiqueService
      .getProduits()
      .subscribe((data: Produit[]) => (this.produits = data));
    }
    else {
    this.boutiqueService
    .getProduitsByCategorie(categorie.id)
    .subscribe((data: Produit[]) => (this.produits = data));
    }
  }
}
