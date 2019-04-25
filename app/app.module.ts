import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { BoutiqueModule } from './boutique/boutique.module';
import { HomeComponent } from './home.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { NavComponent } from './navigation/nav.component';
import { NotFoundComponent } from './not-found.component';
import { ProduitPageComponent } from './boutique/produit-page/produit-page.component';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch:'full'},

  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BoutiqueModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavComponent
  ]
})
export class AppModule {}
