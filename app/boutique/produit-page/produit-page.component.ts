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

      <produit-detail [produit]="produit"></produit-detail>

      <section class="my-3">
      <h3 class="my-2">Dans la même catégorie</h3>
      <div class="row">
        <produit
          class="col-lg-3 col-md-4 mb-4"
          *ngFor="let produit of produits"
          [produit]="produit"
        ></produit>
      </div>
      </section>
    </div>
  `
})
export class ProduitPageComponent implements OnInit {
  produit: Produit;

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
      .switchMap((data: Produit) =>
        this.boutiqueService.getProduitById(data.id)
      )
      .subscribe((data: Produit) => {
        this.produit = data;
        console.log("logging data", data);
        this.boutiqueService
          .getProduitsByCategorie(this.produit.categorie.id)
          .subscribe((data: Produit[]) => (this.produits = data));
      });

    console.log("logging this.produit:", this.produit);
  }
}
