import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="app">
      <app-nav></app-nav>

        <router-outlet></router-outlet>


      <!-- Footer -->
      <footer class="py-5 bg-dark w-100 navbar navbar-fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2019
          </p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {}
