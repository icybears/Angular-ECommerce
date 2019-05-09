import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loginPage',
  styleUrls: ['./loginPage.component.scss'],
  template: `
  <div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Connectez-vous à votre compte!</h3>
              <app-login redirectTo="/boutique"></app-login>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `
})

export class LoginPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

