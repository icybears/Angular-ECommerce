import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
        404 NOT FOUND hehe
        <a routerLink="/">Retour</a>
    </div>
  `
})

export class NotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
