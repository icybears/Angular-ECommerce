import { Component, OnInit, Input } from "@angular/core";
import { Produit } from "../produit/produit.interface";

@Component({
  selector: "produit-detail",
  template: `
    <div class="row">
      <div class="col-md-5">
        <div style="padding-right:20px;">
          <img src="https://picsum.photos/300/200" class="img-fluid" alt="" />
        </div>
      </div>

      <div class="col-md-7">
        <div class="card">
          <h5 class="card-header">{{ produit?.nom }}</h5>
          <div class="card-body">
            <h5 class="card-title">{{ produit?.prix }} DH</h5>
            <p class="card-text">
              With supporting text below
              as a natural lead-in to additional content.
              <br>Categorie: {{ produit?.categorie.nom }}
            </p>
            <a href="#" class="btn btn-primary">Ajouter Au Panier</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProduitDetailComponent implements OnInit {
  @Input()
  produit: Produit;
  constructor() {}

  ngOnInit() {}
}
