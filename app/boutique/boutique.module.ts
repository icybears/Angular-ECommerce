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

const routes: Routes = [
  { path: 'boutique',
    children:[
      { path:'', component: BoutiqueComponent, pathMatch:'full' },
      { path:'produits/:id', component: ProduitPageComponent}
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
    ProduitDetailComponent
    ],
  providers: [
    BoutiqueService
  ],
})
export class BoutiqueModule { }
