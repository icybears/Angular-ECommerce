import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit/Produit.interface';
import { BoutiqueService } from '../boutique.service';
import { Categorie } from '../categorie/categorie.interface';

@Component({
  selector: 'produit-detail',
  template: `

  <div class="container">
    <div class="row">
      <div class="col-md-4">
          img
      </div>

      <div class="col-md-8">
        <h3>{{produit.nom}}</h3>

        <h5>{{ produit.prix }}</h5>
      </div>
    </div>
    <div class="row">
      <h3>Dans la même catégorie</h3>
      <div class="list-group" >
      <produit class="col-lg-4 col-md-6 mb-4"
      *ngFor="let produit of produits"
      [produit]="produit"></produit>
      </div>
    </div>
    <div class="row">
      <h3>De la même cooperative</h3>
      <div class="list-group" >

      </div>
    </div>
  </div>

  `
})

export class ProduitPageComponent implements OnInit {

  @Input()
  produit: Produit;

  produits: Produit[];

  produitsCooperative: Produit[];

  produitsCategorie: Produit[];

  constructor(private boutiqueService: BoutiqueService) { }

  ngOnInit() {
    this.boutiqueService
    .getProduitsByCategorie(this.produit.categorie.id)
    .subscribe((data: Produit[]) => (this.produits = data));
  }
}
