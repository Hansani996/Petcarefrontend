import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginUserDashboardComponent } from './login-user-dashboard/login-user-dashboard.component';
import { MedicalDataComponent } from './medical-data/medical-data.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PetRegisterFormComponent } from './pet-register-form/pet-register-form.component';
import { RegDashboardComponent } from './reg-dashboard/reg-dashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { VaccinationComponent } from './vaccination/vaccination.component';

const routes: Routes = [

{path:'',redirectTo:'home', pathMatch: 'full' },
{path: 'register',component:RegisterFormComponent},
{path: 'login',component:LoginFormComponent},
{path:'home',component:HomePageComponent},
{path:'doctor_registration',component:DoctorRegistrationComponent},
{path:'pet_registration',component:PetRegisterFormComponent},
{path: 'reg-dashboard',component:RegDashboardComponent},
{path: 'vaccination_form',component:VaccinationComponent},
{path:'medical_histry',component:MedicalDataComponent},
{path:'user_dashboard',component:LoginUserDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
