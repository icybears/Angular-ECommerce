import { Component, OnInit } from "@angular/core";

@Component({
  selector: "user-profile",
  template: `
    <section class="user-profile section">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
            <div class="sidebar">
              <!-- Dashboard Links -->
              <div class="widget user-dashboard-menu">
                <ul>
                  <li>
                    <a href="dashboard-my-ads.html"
                      ><i class="fa fa-user"></i> My Ads</a
                    >
                  </li>
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
                  <li>
                    <a href="logout.html"><i class="fa fa-cog"></i> Logout</a>
                  </li>
                  <li>
                    <a href="delete-account.html"
                      ><i class="fa fa-power-off"></i>Delete Account</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
            <!-- Edit Personal Info -->
            <div class="widget personal-info">
              <h3 class="widget-header user">Edit Personal Information</h3>
              <form action="#">
                <!-- Nom -->
                <div class="form-group">
                  <label for="nom">Nom</label>
                  <input type="text" class="form-control" id="nom" />
                </div>
                <!-- Prenom -->
                <div class="form-group">
                  <label for="nom">Prenom</label>
                  <input type="text" class="form-control" id="prenom" />
                </div>
                <!-- Adresse -->
                <div class="form-group">
                  <label for="nom">Adresse</label>
                  <input type="text" class="form-control" id="adresse" />
                </div>
                <!-- Telephone -->
                <div class="form-group">
                  <label for="nom">Telephone</label>
                  <input type="tel" class="form-control" id="telephone" />
                </div>
                 <!-- Email -->
                 <div class="form-group">
                 <label for="nom">Email</label>
                 <input type="email" class="form-control" id="email" />
               </div>
               
                <!-- Submit button -->
                <button class="btn btn-transparent">Save My Changes</button>
              </form>
            </div>
            <!-- Change Password -->
            <div class="widget change-password">
              <h3 class="widget-header user">Edit Password</h3>
              <form action="#">
                <!-- Current Password -->
                <div class="form-group">
                  <label for="current-password">Current Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="current-password"
                  />
                </div>
                <!-- New Password -->
                <div class="form-group">
                  <label for="new-password">New Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="new-password"
                  />
                </div>
                <!-- Confirm New Password -->
                <div class="form-group">
                  <label for="confirm-password">Confirm New Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                  />
                </div>
                <!-- Submit Button -->
                <button class="btn btn-transparent">Change Password</button>
              </form>
            </div>
            <!-- Change Email Address -->
            <div class="widget change-email mb-0">
              <h3 class="widget-header user">Edit Email Address</h3>
              <form action="#">
                <!-- Current Password -->
                <div class="form-group">
                  <label for="current-email">Current Email</label>
                  <input type="email" class="form-control" id="current-email" />
                </div>
                <!-- New email -->
                <div class="form-group">
                  <label for="new-email">New email</label>
                  <input type="email" class="form-control" id="new-email" />
                </div>
                <!-- Submit Button -->
                <button class="btn btn-transparent">Change email</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
