import { Component, OnInit } from '@angular/core';
import {VaccinationDto} from "../dto/vaccination.dto";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MedicalDataService} from "../services/medical-data.service";
import {MedicalDataDto} from "../dto/medicalData.dto";

@Component({
  selector: 'app-add-medical-details',
  templateUrl: './add-medical-details.component.html',
  styleUrls: ['./add-medical-details.component.css']
})
export class AddMedicalDetailsComponent implements OnInit {

  public saveVaccine!: VaccinationDto[];
  form = this.formBuilder.group({
    medId:'',
    medCode: '',
    comment: '',
    description:'',
    diseases: ''


  })


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private medicaldataservice : MedicalDataService

  ) { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.form.value);

    let medicalDataDto = new MedicalDataDto();
    medicalDataDto.med_id = this.form.get('id')?.value
    medicalDataDto.medCode = this.form.get('medCode')?.value
    medicalDataDto.comment = this.form.get('diseases')?.value
    medicalDataDto.diseases = this.form.get('description')?.value
    medicalDataDto.description = this.form.get('comment')?.value


    this.medicaldataservice.saveMedicalData(medicalDataDto)
      .subscribe(res => {
        console.log(res);
      })

    this.router.navigateByUrl('/doctorDashboard')
  }


}
