import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcontentComponent } from './aboutcontent/aboutcontent.component';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { GuradformGuard } from './guradform.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewcontentComponent } from './viewcontent/viewcontent.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'addcontent',component:AddcontentComponent},
  {path:'viewontent',component:AddcontentComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'viewcontent',component:ViewcontentComponent,canActivate:[GuradformGuard]},
  {path:'',component:NavigationbarComponent},
  {path:'',component:HomeComponent},
  {path:'aboutcontent',component:AboutcontentComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
