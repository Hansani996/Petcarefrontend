import { Component, OnInit } from '@angular/core';
import {VetDto} from "../dto/vet.dto";
import {MedicalDataDto} from "../dto/medicalData.dto";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MedicalDataService} from "../services/medical-data.service";

@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrls: ['./medical-data.component.css']
})
export class MedicalDataComponent implements OnInit {

  mediDetails = null;

  public medDetails!: MedicalDataDto[];
  form = this.formBuilder.group({
    med_id:'',
    comment: '',
    description: '',
    diseases:'',
    med_code:''
  })




  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private medicalData: MedicalDataService




  ) {

  }

  ngOnInit(): void {
  this.getMedicalDetails();

  }

  getMedicalDetails(){
    this.medicalData.getAllMedicaldata().subscribe(
      (resp)=>{
        console.log(resp);

        // @ts-ignore
        this.mediDetails = resp;
      },
      (err)=>{
        console.log(err);
      }
    );

  }



}
