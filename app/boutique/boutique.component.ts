import { Component, OnInit } from "@angular/core";
import { Produit } from "./produit/produit.interface";
import { BoutiqueService } from "./boutique.service";
import { Categorie } from "./categorie/categorie.interface";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "boutique",
  template: `

   <!-- <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg  navigation">
              <a class="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto main-nav ">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="dashboard.html">Dashboard</a>
                  </li>
                  <li class="nav-item dropdown dropdown-slide">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages <span><i class="fa fa-angle-down"></i></span>
                    </a>
                     Dropdown list
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="category.html">Category</a>
                      <a class="dropdown-item" href="single.html"
                        >Single Page</a
                      >
                      <a class="dropdown-item" href="store-single.html"
                        >Store Single</a
                      >
                      <a class="dropdown-item" href="dashboard.html"
                        >Dashboard</a
                      >
                      <a class="dropdown-item" href="user-profile.html"
                        >User Profile</a
                      >
                      <a class="dropdown-item" href="submit-coupon.html"
                        >Submit Coupon</a
                      >
                      <a class="dropdown-item" href="blog.html">Blog</a>
                      <a class="dropdown-item" href="single-blog.html"
                        >Single Post</a
                      >
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-slide">
                    <a
                      class="nav-link dropdown-toggle"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Listing <span><i class="fa fa-angle-down"></i></span>
                    </a>
                     Dropdown list
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul class="navbar-nav ml-auto mt-10">
                  <li class="nav-item">
                    <a class="nav-link login-button" href="index.html">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link add-button" href="#"
                      ><i class="fa fa-plus-circle"></i> Add Listing</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>-->
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
                <h4 class="widget-header">Nos Categories</h4>
                <ul class="category-list">
                  <li>
                    <a [routerLink]="['/boutique/categorie','all']">Tout les produits <span>343</span></a>
                  </li>
                  <li *ngFor="let categorie of categories">
                    <a [routerLink]="['/boutique/categorie', categorie?.id]"

                    >{{categorie?.nom}} <span>343</span></a>
                  </li>
                </ul>
              </div>

              <div class="widget category-list">
                <h4 class="widget-header">Nearby</h4>
                <ul class="category-list">
                  <li>
                    <a href="category.html">New York <span>93</span></a>
                  </li>
                  <li>
                    <a href="category.html">New Jersy <span>233</span></a>
                  </li>
                  <li>
                    <a href="category.html">Florida <span>183</span></a>
                  </li>
                  <li>
                    <a href="category.html">California <span>120</span></a>
                  </li>
                  <li>
                    <a href="category.html">Texas <span>40</span></a>
                  </li>
                  <li>
                    <a href="category.html">Alaska <span>81</span></a>
                  </li>
                </ul>
              </div>

              <div class="widget filter">
                <h4 class="widget-header">Show Produts</h4>
                <select>
                  <option>Popularity</option>
                  <option value="1">Top rated</option>
                  <option value="2">Lowest Price</option>
                  <option value="4">Highest Price</option>
                </select>
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
  produits: Produit[];
  categories: Categorie[];
  selectedCategorie: Categorie;
  constructor(private boutiqueService: BoutiqueService,
    private router: Router,
    private route: ActivatedRoute,) {}

  ngOnInit() {

    this.route.params.subscribe(
      (params : Params) => {
        console.log("current route is: ",this.route.url)
        if(params["id"] && params["id"] !== 'all'){

          let id = params["id"];
           this.boutiqueService
          .getProduitsByCategorie(id)
          .subscribe((data: Produit[]) => (this.produits = data));
        } else {
          this.boutiqueService
          .getProduits()
          .subscribe((data: Produit[]) => (this.produits = data));
        }
      }
   );



    this.boutiqueService
      .getCategories()
      .subscribe((data: Produit[]) => (this.categories = data));
  }

  setCategorie(categorie: Categorie) {
    if (!categorie) {
      this.boutiqueService
        .getProduits()
        .subscribe((data: Produit[]) => (this.produits = data));
    } else {
      this.boutiqueService
        .getProduitsByCategorie(categorie.id)
        .subscribe((data: Produit[]) => (this.produits = data));
    }
  }
}
