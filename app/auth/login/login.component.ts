import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { AuthLoginInfo } from '../login-info';

@Component({
  selector: 'app-login',
  template: `
  <div *ngIf="isLoggedIn; else loggedOut">
  Logged in as {{roles}}.
</div>

<ng-template #loggedOut>
    <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" name="username" [(ngModel)]="form.username" #username="ngModel"
          required />
        <div *ngIf="f.submitted && username.invalid">
          <div *ngIf="username?.errors.required">Username is required</div>
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" [(ngModel)]="form.password" #password="ngModel"
          required minlength="6" />
        <div *ngIf="f.submitted && password.invalid">
          <div *ngIf="password?.errors.required">Password is required</div>
          <div *ngIf="password?.errors.minlength">Password must be at least 6 characters</div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
        <div *ngIf="f.submitted && isLoginFailed" class="alert alert-danger">
          Login failed: {{errorMessage}}
        </div>
      </div>
    </form>
    <hr />
    <p>Don't have an account?</p>
    <a href="signup" class="btn btn-success">Sign Up</a>
</ng-template>
  `
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
