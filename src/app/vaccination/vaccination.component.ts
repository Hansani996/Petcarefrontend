import { Component, OnInit } from '@angular/core';
import {PetRegistrationDto} from "../dto/pet-registration.dto";
import {VaccinationDto} from "../dto/vaccination.dto";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {PetRegistrationService} from "../services/pet-registration.service";
import {vaccinationServiceervice} from "../services/vaccination.service";

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {

  public saveVaccine!: VaccinationDto[];
  form = this.formBuilder.group({
    id:'',
    vaccineCode: '',
    vaccineName: '',
    date:'',

  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private vaccinationServiceervice: vaccinationServiceervice
  ) { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.form.value);

    let vaccinatioinDto = new VaccinationDto();
    vaccinatioinDto.id = this.form.get('')?.value
    vaccinatioinDto.vaccineCode = this.form.get('vaccineCode')?.value
    vaccinatioinDto.vaccineName = this.form.get('vaccineName')?.value
    vaccinatioinDto.date = this.form.get('date')?.value


    this.vaccinationServiceervice.saveVaccination(vaccinatioinDto)
      .subscribe(res => {
        console.log(res);
      })

    this.router.navigateByUrl('/doctorDashboard')
  }

}
