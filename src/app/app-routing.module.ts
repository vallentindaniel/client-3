import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/pages/auth/login/login.component';
import { RegisterComponent } from './main/pages/auth/register/register.component';
import { ControlCenterComponent } from './main/pages/control-center/control-center.component';
import { WelcomePageComponent } from './main/pages/guest/welcome-page/welcome-page.component';
import { HomeComponent } from './main/pages/home/home.component';
import { AuthGuard } from './main/_helpers/auth.guard';
import { Role } from './main/_models/role';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'guest/welcome', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { role: [Role.User] }
  },
  { 
    path: 'controlCenter', 
    component: ControlCenterComponent ,
    canActivate: [AuthGuard],
    //data: { role: [Role.User] }
  },
  {
    path: 'admin', children: [
      { path: 'home', component: HomeComponent }
    ],
    canActivate: [AuthGuard],
    data: { role: [Role.Admin] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
