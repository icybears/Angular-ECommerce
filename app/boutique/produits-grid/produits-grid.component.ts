import { Component, OnInit, Input } from "@angular/core";
import { Produit } from "../produit/produit.interface";

@Component({
  selector: "produits-grid",
  template: `
    <div class="product-grid-list">
      <div class="row mt-30">
        <div
          *ngFor="let produit of produits"
          class="col-sm-12 col-lg-4 col-md-6"
        >
          <!-- product card -->
          <produit [produit]="produit"></produit>
        </div>
      </div>
    </div>
  `
})
export class ProduitsGridComponent implements OnInit {
  @Input()
  produits: Produit[];
  constructor() {}

  ngOnInit() {}
}
