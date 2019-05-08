import { Component, OnInit } from "@angular/core";
import { Produit } from "./produit/produit.interface";
import { BoutiqueService } from "./boutique.service";
import { Categorie } from "./categorie/categorie.interface";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Cooperative } from "./cooperative/cooperative.interface";
import { MatierePremiere } from "./matiere-premiere/matiere-premiere.interface";

import 'rxjs/add/operator/filter';
import { TokenStorageService } from "../auth/token-storage.service";

@Component({
  selector: "boutique",
  template: `
     <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <navbar [isLoggedIn]="isLoggedIn" [username]="username"></navbar>
          </div> 
        </div>
      </div>
    </section>
    <!-- <section class="page-search">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            Advance Search
            <div class="advance-search">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inputtext4"
                      placeholder="What are you looking for"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      id="inputCategory4"
                      placeholder="Category"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      id="inputLocation4"
                      placeholder="Location"
                    />
                  </div>
                  <div class="form-group col-md-2">
                    <button type="submit" class="btn btn-primary">
                      Search Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <section class="section-sm">
      <div class="container">

        <!-- RESULTAT DE RECHERCHE
        <div class="row">
          <div class="col-md-12">
            <div class="search-result bg-gray">
              <h2>Results For "Electronics"</h2>
              <p>123 Results on 12 December, 2017</p>
            </div>
          </div>
        </div>-->
        <div class="row">
          <div class="col-md-3">
            <div class="category-sidebar">
              <div class="widget category-list">
                <h4 class="widget-header">Categorie</h4>
                <ul class="category-list">

                  <li>
                    <a [routerLink]="['/boutique']" [queryParams]="{categorie:'all'}">
                    Tout les produits <span>{{produits?.length}}</span></a>

                  </li>
                  <li *ngFor="let categorie of categories">
                    <a [routerLink]="['/boutique']" [queryParams]="{categorie:categorie?.id}">{{categorie?.nom}} <span>{{ this.getProductsCountByCategorie(categorie) }}</span></a>

                  </li>
                </ul>
              </div>

              <div class="widget category-list">
                <h4 class="widget-header">Matiere Premiere</h4>
                <ul class="category-list">
                  <li *ngFor="let matiere of matieres_premieres">
                    <a [routerLink]="['/boutique']" [queryParams]="{matierePremiere:matiere?.id}">{{ matiere?.nom }} <span>93</span></a>
                  </li>

                </ul>
              </div>

              <div class="widget filter">
                <h4 class="widget-header">Cooperative</h4>

                <div class="nice-select" tabindex="0">
                  <span class="current">Cooperative</span>
                  <ul class="list">
                    <li  data-value="Cooperative" class="option selected focus">
                      Cooperative
                    </li>
                    <a *ngFor="let cooperative of cooperatives" [routerLink]="['/boutique']" [queryParams]="{ cooperative: cooperative?.id}"><li class="option">
                    {{ cooperative?.nom }}
                    </li></a>

                  </ul>
                </div>
              </div>

              <!-- Fin category sidebar -->
            </div>
          </div>
          <div class="col-md-9">
            <div class="category-search-filter">
              <div class="row">
                <div class="col-md-6">
                  <strong>Short</strong>
                  <select>
                    <option>Most Recent</option>
                    <option value="1">Most Popular</option>
                    <option value="2">Lowest Price</option>
                    <option value="4">Highest Price</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <div class="view">
                    <strong>Views</strong>
                    <ul class="list-inline view-switcher">
                      <li class="list-inline-item">
                        <a href="javascript:void(0);"
                          ><i class="fa fa-th-large"></i
                        ></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void(0);"
                          ><i class="fa fa-reorder"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- produits grid -->
            <produits-grid [produits]="produits"></produits-grid>

            <!-- PAGINATION -->
            <div class="pagination justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--============================
=            Footer            =
=============================-->
    <boutique-footer></boutique-footer>
  `
})
export class BoutiqueComponent implements OnInit {
  itemsCount: number = 0;
  produits: Produit[];
  categories: Categorie[];
  cooperatives: Cooperative[];
  matieres_premieres: MatierePremiere[];
  isLoggedIn: boolean = false;
  username: string = "";

  constructor(
    private boutiqueService: BoutiqueService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit() {
    console.log(this.router.url);
    this.route.queryParams
      .filter(params => true)
      .subscribe(params => {
        if(params.categorie && params.categorie > 0){
          this.boutiqueService
         .getProduitsByCategorie(params.categorie)
         .subscribe((data: Produit[]) => (this.produits = data));
        } else if(params.cooperative && params.cooperative > 0)
        {
          this.boutiqueService
          .getProduitsByCooperative(params.cooperative)
          .subscribe((data: Produit[]) => (this.produits = data));

        } else if(params.matierePremiere && params.matierePremiere > 0)
        {
          this.boutiqueService.getProduitsByMatierePremiere(params.matierePremiere)
          .subscribe((data: Produit[]) => (this.produits = data));
        }
          else {
          this.boutiqueService
          .getProduits()
         .subscribe((data: Produit[]) => (this.produits = data));
        }

        if (this.tokenStorage.getToken()) {
          this.isLoggedIn = true;
          this.username = this.tokenStorage.getUsername();
        }

      });


    // get all categories
    this.boutiqueService
      .getCategories()
      .subscribe((data: Categorie[]) => (this.categories = data));

    // get all cooperatives
    this.boutiqueService
      .getCooperatives()
      .subscribe((data: Cooperative[]) => (this.cooperatives = data));

    // get all matieres premieres
    this.boutiqueService
      .getMatieresPremieres()
      .subscribe((data: MatierePremiere[]) => (this.matieres_premieres = data));
  }

  // setCategorie(categorie: Categorie) {
  //   if (!categorie) {
  //     this.boutiqueService
  //       .getProduits()
  //       .subscribe((data: Produit[]) => (this.produits = data));
  //   } else {
  //     this.boutiqueService
  //       .getProduitsByCategorie(categorie.id)
  //       .subscribe((data: Produit[]) => (this.produits = data));
  //   }
  // }

    getProductsCountByCategorie(categorie: Categorie): number{
      if(this.produits)
      return this.produits.filter((produit) => {
        if(produit.categorie)
        return produit.categorie.id == categorie.id
        else
        return false;}
        )
        .length;
      else
      return 0;
    }
}
