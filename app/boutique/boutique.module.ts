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
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsGridComponent } from './produits-grid/produits-grid.component';
import { CooperativePageComponent } from './cooperative-page/cooperative-page.component';

const routes: Routes = [
  { path: 'boutique',
    children:[
      { path:'', component: BoutiqueComponent, pathMatch:'full' },
      { path:'produit/:id', component: ProduitPageComponent},
      { path:'categorie/:id', component: BoutiqueComponent},
      { path: 'cooperative/:id', component: CooperativePageComponent}
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
    ProduitDetailComponent,
    ProduitsGridComponent,
    CooperativePageComponent,
    FooterComponent
    ],
  providers: [
    BoutiqueService
  ],
})
export class BoutiqueModule { }
