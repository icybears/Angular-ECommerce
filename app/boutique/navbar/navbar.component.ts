import { Component, OnInit, Input } from '@angular/core';
import { PanierComponent } from '../panier/panier.component';

@Component({
  selector: 'navbar',
  providers:[PanierComponent],
  template: `
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
    <!--                Dropdown list -->
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
              <!--    Dropdown list -->
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul class="navbar-nav ml-auto mt-10">
                  <li class="nav-item">

                    <a *ngIf="!isLoggedIn" class="nav-link login-button" [routerLink]="['/boutique/login']">Login</a>
                    <a *ngIf="isLoggedIn" class="nav-link login-button" href="index.html"><i class="fa fa-user"></i> Mon Compte</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link add-button" [routerLink]="['/boutique/panier']">
                    <i class="fa fa-shopping-cart"></i> Mon Panier <span class="badge badge-light">
                    {{itemsCount}}</span></a>
                  </li>
                 
                </ul>
              </div>
            </nav>
  `
})

export class NavbarComponent implements OnInit {
  @Input()
  isLoggedIn: boolean = false;

  @Input()
  username: string = "";

  itemsCount: number = 0;

  constructor(private panierComponent: PanierComponent) { }

  ngOnInit() {
    this.itemsCount = this.panierComponent.loadCart();

  }
}
