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
import {VaccineCrudComponent} from "./vaccine-crud/vaccine-crud.component";
import {VaccineHistoryComponent} from "./vaccine-history/vaccine-history.component";
import {DoctorDashboardComponent} from "./doctor-dashboard/doctor-dashboard.component";
import {AddMedicalDetailsComponent} from "./add-medical-details/add-medical-details.component";


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
{path:'user_dashboard',component:LoginUserDashboardComponent},
  {path: 'register_dashboard',component:RegDashboardComponent},

  {path: 'login_user_dashboard',component:LoginUserDashboardComponent},
  {path: 'vaccineDetails',component:VaccineCrudComponent},

  {path: 'vaccineHistory',component:VaccineHistoryComponent},
  {path:'doctorDashboard',component:DoctorDashboardComponent},
  {path: 'addMedicalDetails',component:AddMedicalDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
