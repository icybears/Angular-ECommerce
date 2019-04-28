import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BoutiqueComponent } from './boutique.component';
import { CommonModule } from '@angular/common';
import { BoutiqueService } from './boutique.service';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitPageComponent } from './produit-page/produit-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../navigation/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsGridComponent } from './produits-grid/produits-grid.component';
import { CooperativePageComponent } from './cooperative-page/cooperative-page.component';
import { QuantiteComponent } from './quantite/quantite.component';
import { PanierComponent } from './panier/panier.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'boutique',
    children:[
      { path:'', component: BoutiqueComponent, pathMatch:'full' },
      { path:'produit/:id', component: ProduitPageComponent},
      { path: 'cooperative/:id', component: CooperativePageComponent},
      { path: 'panier', component: PanierComponent },
    ]
  }
];


@NgModule({
  imports: [
            CommonModule,
            HttpModule,
            RouterModule.forChild(routes)
  ],
  exports: [
    BoutiqueComponent
  ],
  declarations: [
    BoutiqueComponent,
    ProduitComponent,
    CategorieComponent,
    ProduitPageComponent,
    ProduitsGridComponent,
    CooperativePageComponent,
    QuantiteComponent,
    PanierComponent,
    FooterComponent,
    NavbarComponent
    ],
  providers: [
    BoutiqueService
  ],
})
export class BoutiqueModule { }
