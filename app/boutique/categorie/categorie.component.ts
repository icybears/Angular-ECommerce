import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Categorie } from './categorie.interface';

@Component({
  selector: 'categorie',
  template: `
  <div class="list-group-item">
    <a [routerLink]="['categorie', categorie.id]"> {{ default ? "All" : categorie.nom}}></a>
  </div>
  `
})

export class CategorieComponent implements OnInit {
  @Input()
  categorie: Categorie;

  @Input()
  default: boolean = false;

  constructor() { }

  ngOnInit() { }


}


