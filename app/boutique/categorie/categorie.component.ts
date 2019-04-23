import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Categorie } from './categorie.interface';

@Component({
  selector: 'categorie',
  template: `
  <div class="list-group-item">
   {{ default ? "All" : categorie.nom}}
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


