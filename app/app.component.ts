import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="app">


        <router-outlet (activate)="onActivate($event)"></router-outlet>


  `
})
export class AppComponent {

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}
}
