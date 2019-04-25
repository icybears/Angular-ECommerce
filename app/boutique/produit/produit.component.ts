import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Produit } from "./Produit.interface";

@Component({
  selector: "produit",
  template: `

  <div class="product-item bg-light">
	<div class="card">
		<div class="thumb-content">
		 <div class="price">{{produit?.prix}} DH</div>
			<a href="">
				<img class="card-img-top img-fluid" src="https://via.placeholder.com/150" alt="Card image cap">
			</a>
		</div>
		<div class="card-body">
		    <h4 class="card-title"><a [routerLink]="['/boutique/produit', produit?.id]">{{produit?.nom}}</a></h4>
		    <ul class="list-inline product-meta">
		    	<li class="list-inline-item">
		    		<a href=""><i class="fa fa-folder-open-o"></i>{{produit?.categorie?.nom}}</a>
		    	</li>
		    	<li class="list-inline-item">
		    		<a href=""><i class="fa fa-certificate"></i>{{produit?.cooperative?.nom}}</a>
		    	</li>
		    </ul>
		    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>

		</div>
	</div>
</div>





  `
})
export class ProduitComponent implements OnInit {
  @Input()
  produit: Produit;

  // @Output()
  // afficher: EventEmitter<Produit> = new EventEmitter<Produit>();
  constructor() {}

  ngOnInit() {}

  // afficherProduit(){
  //   this.afficher.emit(this.produit);
  // }
}
