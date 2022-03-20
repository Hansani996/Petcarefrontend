import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PetRegisterFormComponent } from './pet-register-form/pet-register-form.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { RegDashboardComponent } from './reg-dashboard/reg-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerService } from './services/owner.service';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { MedicalDataComponent } from './medical-data/medical-data.component';
import { LoginUserDashboardComponent } from './login-user-dashboard/login-user-dashboard.component';
import {ReactiveFormsModule} from "@angular/forms";
import { VaccineCrudComponent } from './vaccine-crud/vaccine-crud.component';
import { VaccineHistoryComponent } from './vaccine-history/vaccine-history.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AddMedicalDetailsComponent } from './add-medical-details/add-medical-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    PetRegisterFormComponent,
    DoctorRegistrationComponent,
    RegDashboardComponent,
    VaccinationComponent,
    MedicalDataComponent,
    LoginUserDashboardComponent,
    VaccineCrudComponent,
    VaccineHistoryComponent,
    DoctorDashboardComponent,
    AddMedicalDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
