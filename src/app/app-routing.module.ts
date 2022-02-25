import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PetRegisterFormComponent } from './pet-register-form/pet-register-form.component';
import { RegDashboardComponent } from './reg-dashboard/reg-dashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [

{path:'',redirectTo:'home', pathMatch: 'full' },
{path: 'register',component:RegisterFormComponent},
{path: 'login',component:LoginFormComponent},
{path:'home',component:HomePageComponent},
{path:'doctor_registration',component:DoctorRegistrationComponent},
{path:'pet_registration',component:PetRegisterFormComponent},
{path: 'reg-dashboard',component:RegDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
