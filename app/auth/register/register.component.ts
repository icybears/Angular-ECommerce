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
<div class="row col-sm-12" style="">
  <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
  <div class="row">
  <div class="form-group col-md-6">
      <label for="username">Nom d'utilisateur</label>
      <input type="text" class="form-control" name="username" [(ngModel)]="form.username" #username="ngModel"
        required />
      <div *ngIf="f.submitted && username.invalid">
        <div *ngIf="username?.errors.required">Nom d'utilisateur est obligatoire.</div>
      </div>
    </div>
    <div class="form-group col-md-6">
      <label for="password">Mot de passe</label>
      <input type="password" class="form-control" name="password" [(ngModel)]="form.password" #password="ngModel"
        required minlength="6" />
      <div *ngIf="f.submitted && password.invalid">
        <div *ngIf="password?.errors.required">Mot de passe est obligatoire.</div>
        <div *ngIf="password?.errors.minlength">Mot de passe doit contenir au minimum 6 caractères.</div>
      </div>
    </div>
    </div>
    <div class="row">
    <div class="form-group col-md-6">
      <label for="nom">Nom</label>
      <input type="text" class="form-control" name="nom" [(ngModel)]="form.nom" #nom="ngModel" required />
      <div *ngIf="f.submitted && nom.invalid">
        <div *ngIf="nom?.errors.required">Nom est obligatoire.</div>
      </div>
    </div>
    <div class="form-group col-md-6">
      <label for="prenom">Prenom</label>
      <input type="text" class="form-control" name="prenom" [(ngModel)]="form.prenom" #prenom="ngModel" required />
      <div *ngIf="f.submitted && prenom.invalid">
        <div *ngIf="prenom?.errors.required">Prenom est obligatoire.</div>
      </div>
    </div>
    </div>
    <div class="form-group">
      <label for="adresse">Adresse</label>
      <input type="text" class="form-control" name="adresse" [(ngModel)]="form.adresse" #adresse="ngModel" required />
      <div *ngIf="f.submitted && adresse.invalid">
        <div *ngIf="adresse?.errors.required">Adresse est obligatoire.</div>
      </div>
    </div>
    <div class="row">
    <div class="form-group col-md-6">
      <label for="telephone">Telephone</label>
      <input type="tel" class="form-control" name="telephone" [(ngModel)]="form.telephone" #telephone="ngModel" required />
      <div *ngIf="f.submitted && telephone.invalid">
        <div *ngIf="telephone?.errors.required">Telephone est obligatoire</div>
      </div>
    </div>

    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="text" class="form-control" name="email" [(ngModel)]="form.email" #email="ngModel" required email />
      <div *ngIf="f.submitted && email.invalid">
        <div *ngIf="email?.errors.required">Email est obligatoire.</div>
        <div *ngIf="email?.errors.email">Email doit être valide</div>
      </div>
    </div>
</div>
    <div class="form-group">
      <button class="btn btn-primary">S'enregistrer</button>
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
      this.form.username,
      this.form.nom,
      this.form.prenom,
      this.form.adresse,
      this.form.telephone,
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
