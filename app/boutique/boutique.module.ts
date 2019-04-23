import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BoutiqueComponent } from './boutique.component';
import { CommonModule } from '@angular/common';
import { BoutiqueService } from './boutique.service';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitPageComponent } from './produit-page/produit-page.component';

@NgModule({
  imports: [CommonModule,HttpModule],
  exports: [BoutiqueComponent],
  declarations: [BoutiqueComponent, ProduitComponent, CategorieComponent, ProduitPageComponent],
  providers: [BoutiqueService],
})
export class BoutiqueModule { }
