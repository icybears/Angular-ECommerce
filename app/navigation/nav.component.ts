import { Component, OnInit } from '@angular/core';
import { Nav } from './nav.interface';

@Component({
  selector: 'app-nav',
  template: `
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">

          <li *ngFor="let item of nav" class="nav-item ">
            <a class="nav-link"
            [routerLink]="item.link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.exact}"
            >
            {{ item.name }}
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  `
})

export class NavComponent implements OnInit {

  nav: Nav[] = [
    { link: "/", name: "Home", exact: true},
    { link: "/boutique", name: "Boutique",exact: false}
  ]
  constructor() { }

  ngOnInit() { }
}
