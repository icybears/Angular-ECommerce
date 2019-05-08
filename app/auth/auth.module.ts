import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';


const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
},
{
    path: 'signup',
    component: RegisterComponent
}
]

@NgModule({
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [httpInterceptorProviders,AuthService,TokenStorageService],
})
export class AuthModule { }
