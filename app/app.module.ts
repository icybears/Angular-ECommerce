import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { BoutiqueModule } from './boutique/boutique.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './navigation/nav.component';
import { NotFoundComponent } from './not-found.component';
import { ProduitPageComponent } from './boutique/produit-page/produit-page.component';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch:'full'},

  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BoutiqueModule,
    AuthModule,
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
