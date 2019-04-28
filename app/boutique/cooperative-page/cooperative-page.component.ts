import { Component, OnInit, Input } from "@angular/core";
import { Produit } from "../produit/Produit.interface";
import { BoutiqueService } from "../boutique.service";
import { Categorie } from "../categorie/categorie.interface";
import { Router, ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Cooperative } from "../cooperative/cooperative.interface";

@Component({
  selector: "cooperative-page",
  template: `
    <div class="container">
      <button (click)="goBack()" class="btn btn-light btn-sm my-2">
        &lsaquo; Retour
      </button>
      <section class="my-2">
        <div class="product-details row">
          <h1 class="product-title col-12">
            {{cooperative?.nom}}
          </h1>
          <div class="product-meta col-12">
            <ul class="list-inline">


            </ul>
          </div>
         <!-- <div class="col-md-6">
            <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap">
          </div>
          -->
          <div class="col-md-6">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <h3 class="tab-title">Description de la Cooperative</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia laudantium beatae quod perspiciatis, neque dolores eos
                  rerum, ipsa iste cum culpa numquam amet provident eveniet
                  pariatur, sunt repellendus quas voluptate dolor cumque autem
                  molestias.
                </p>


              </div>

            </div>


          </div>

        </div>
      </section>

      <section class="mt-4">
        <h3 class="mb-4 mt-3 underline">Produits de cette cooperative:</h3>
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
export class CooperativePageComponent implements OnInit {

  cooperative: Cooperative;

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
      .switchMap((data: Cooperative) =>

        this.boutiqueService.getCooperativeById(data.id)

      )
      .subscribe((data: Cooperative) => {
        this.cooperative = data;
        console.log("logging data", data);
        this.boutiqueService
          .getProduitsByCooperative(this.cooperative.id)
          .subscribe((data: Produit[]) => (this.produits = data));
      });


  }

  goBack(){
    this.router.navigate(['/boutique'])
  }
}
