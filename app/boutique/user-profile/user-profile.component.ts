import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { TokenStorageService } from "../../auth/token-storage.service";
import { Client } from "./client/client.interface";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "user-profile",
  template: `
    <section class="user-profile section container">
    <div class="my-2">
      <button (click)="goBack()" class="btn btn-light btn-sm">
        &lsaquo; Retour
      </button>
      </div>
      <div class="">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
            <div class="sidebar">
              <!-- Dashboard Links -->
              <div class="widget user-dashboard-menu">
                <ul>
                  <li>
                    <a href="dashboard-my-ads.html"
                      ><i class="fa fa-user"></i> Information personnelle</a
                    >
                  </li>
                  <li>
                    <a href="dashboard-pending-ads.html"
                      ><i class="fa fa-bolt"></i> Mes commandes<span
                        >23</span
                      ></a
                    >
                  <!--
                  <li>
                    <a href="dashboard-favourite-ads.html"
                      ><i class="fa fa-bookmark-o"></i> Favourite Ads
                      <span>5</span></a
                    >
                  </li>
                  <li>
                    <a href="dashboard-archived-ads.html"
                      ><i class="fa fa-file-archive-o"></i>Archeved Ads
                      <span>12</span></a
                    >
                  </li>
                  <li>
                    <a href="dashboard-pending-ads.html"
                      ><i class="fa fa-bolt"></i> Pending Approval<span
                        >23</span
                      ></a
                    >
                  </li>
                  -->
                  <li>
                    <a href="logout.html"><i class="fa fa-cog"></i> Logout</a>
                  </li>
                  <!--
                  <li>
                    <a href="delete-account.html"
                      ><i class="fa fa-power-off"></i>Delete Account</a
                    >
                  </li>
                  -->
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
            <!-- Edit Personal Info -->
            <div class="widget personal-info">
              <h3 class="widget-header user">Mes Information Personnelle</h3>
              <form
                name="form"
                (ngSubmit)="f.form.valid && onSubmit()"
                #f="ngForm"
                novalidate
              >

                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="nom">Nom</label>
                    <input
                      type="text"
                      class="form-control"
                      name="nom"
                      [(ngModel)]="client && client.nom"
                      #nom="ngModel"
                      required
                    />
                    <div *ngIf="f.submitted && nom.invalid">
                      <div *ngIf="nom?.errors.required">
                        Nom est obligatoire.
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="prenom">Prenom</label>
                    <input
                      type="text"
                      class="form-control"
                      name="prenom"
                      [(ngModel)]="client && client.prenom"
                      #prenom="ngModel"
                      required
                    />
                    <div *ngIf="f.submitted && prenom.invalid">
                      <div *ngIf="prenom?.errors.required">
                        Prenom est obligatoire.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="adresse">Adresse</label>
                  <input
                    type="text"
                    class="form-control"
                    name="adresse"
                    [(ngModel)]="client && client.adresse"
                    #adresse="ngModel"
                    required
                  />
                  <div *ngIf="f.submitted && adresse.invalid">
                    <div *ngIf="adresse?.errors.required">
                      Adresse est obligatoire.
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="telephone">Telephone</label>
                    <input
                      type="tel"
                      class="form-control"
                      name="telephone"
                      [(ngModel)]="client && client.tel"
                      #telephone="ngModel"
                      required
                    />
                    <div *ngIf="f.submitted && telephone.invalid">
                      <div *ngIf="telephone?.errors.required">
                        Telephone est obligatoire
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      [(ngModel)]="client && client.email"
                      #email="ngModel"
                      required
                      email
                    />
                    <div *ngIf="f.submitted && email.invalid">
                      <div *ngIf="email?.errors.required">
                        Email est obligatoire.
                      </div>
                      <div *ngIf="email?.errors.email">
                        Email doit être valide
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <!-- Submit button -->
                  <button class="btn btn-transparent">Sauvegarder</button>
                </div>
              </form>
            </div>
            <!--
            <!- - Change Password - ->
            <div class="widget change-password">
               <h3 class="widget-header user">Edit Password</h3>
              <form action="#">
                <!- - Current Password - ->
                <div class="form-group">
                  <label for="current-password">Current Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="current-password"
                  />
                </div>
                <!- - New Password - ->
                <div class="form-group">
                  <label for="new-password">New Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="new-password"
                  />
                </div>
                <!- - Confirm New Password - ->
                <div class="form-group">
                  <label for="confirm-password">Confirm New Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                  />
                </div>
                <!- - Submit Button - ->
                <button class="btn btn-transparent">Change Password</button>
              </form>
            </div>
            <!- - Change Email Address - ->
            <div class="widget change-email mb-0">
              <h3 class="widget-header user">Edit Email Address</h3>
              <form action="#">
                <!- - Current Password - ->
                <div class="form-group">
                  <label for="current-email">Current Email</label>
                  <input type="email" class="form-control" id="current-email" />
                </div>
                <!- - New email - ->
                <div class="form-group">
                  <label for="new-email">New email</label>
                  <input type="email" class="form-control" id="new-email" />
                </div>
                <!- - Submit Button - ->
                <button class="btn btn-transparent">Change email</button>
              </form>
            </div>-->
          </div>
        </div>
      </div>
    </section>
  `
})
export class UserProfileComponent implements OnInit {
  form: any = {};
  JWTtoken: string = "";
  client: Client = null;
  profileAPI: string = "http://localhost:8080/PFA/api/v1/profile";
  clientAPI: string = "http://localhost:8080/PFA/api/v1/clients";

  constructor(
    private http: Http,
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.JWTtoken = this.tokenStorageService.getToken();
    this.getAuthenticatedClient().subscribe((data: Client) => {
      this.client = data;
      console.log(this.client);
    });
  }

  getAuthenticatedClient(): Observable<Client> {

    let headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.JWTtoken}`
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .get(this.profileAPI, options)
      .map((response: Response) => response.json());
  }

  updateClientDetails(client: Client):Observable<Client> {
    let headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.JWTtoken}`
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${this.clientAPI}/${client.id}`,client, options)
      .map((response: Response) => response.json());
  }
  onSubmit(){
    console.log(this.client);
    this.updateClientDetails(this.client)
    .subscribe((data: Client) => {
      console.log("data: "+data);
      // this.client = data;
    });
  }

  goBack() {
    this.router.navigate(["/boutique"]);
  }
}
