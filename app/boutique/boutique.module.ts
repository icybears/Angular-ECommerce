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

import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-client/loginPage.component';
import { AuthModule } from '../auth/auth.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'boutique',
    children:[
      { path:'', component: BoutiqueComponent, pathMatch:'full' },
      { path:'produit/:id', component: ProduitPageComponent},
      { path: 'cooperative/:id', component: CooperativePageComponent},
      { path: 'panier', component: PanierComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'compte', component: UserProfileComponent },
    ]
  }
];


@NgModule({
  imports: [
            CommonModule,
            HttpModule,
            FormsModule,
            AuthModule,
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
    NavbarComponent,
    LoginPageComponent,
    UserProfileComponent
    ],
  providers: [
    BoutiqueService
  ],
})
export class BoutiqueModule { }
