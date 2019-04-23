import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
        Home Component ! WELCOME
    </div>
  `
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
