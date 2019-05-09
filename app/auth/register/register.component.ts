import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { SignUpInfo } from '../signup-info';

@Component({
  selector: 'app-register',
  template: `

<div *ngIf="isSignedUp; else signupForm" >
Your registration is successful. Please login!
</div>

<ng-template #signupForm>
<div class="row col-sm-6" style="max-width:350px;">
  <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
    <div class="form-group">
      <label for="name">Your name</label>
      <input type="text" class="form-control" name="name" [(ngModel)]="form.name" #name="ngModel" required />
      <div *ngIf="f.submitted && name.invalid">
        <div *ngIf="name?.errors.required">Name is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" name="username" [(ngModel)]="form.username" #username="ngModel"
        required />
      <div *ngIf="f.submitted && username.invalid">
        <div *ngIf="username?.errors.required">Username is required</div>
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" name="email" [(ngModel)]="form.email" #email="ngModel" required email />
      <div *ngIf="f.submitted && email.invalid">
        <div *ngIf="email?.errors.required">Email is required</div>
        <div *ngIf="email?.errors.email">Email must be a valid email address</div>
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
      <button class="btn btn-primary">Register</button>
      <div *ngIf="f.submitted && isSignUpFailed" class="alert alert-warning">
        Signup failed!<br/>{{errorMessage}}
      </div>
    </div>
  </form>
</div>
</ng-template>
  `,
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}