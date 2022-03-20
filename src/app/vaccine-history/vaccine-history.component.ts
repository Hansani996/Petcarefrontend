import { Component, OnInit } from '@angular/core';
import {MedicalDataDto} from "../dto/medicalData.dto";
import {VaccinationDto} from "../dto/vaccination.dto";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {vaccinationServiceervice} from "../services/vaccination.service";

@Component({
  selector: 'app-vaccine-history',
  templateUrl: './vaccine-history.component.html',
  styleUrls: ['./vaccine-history.component.css']
})
export class VaccineHistoryComponent implements OnInit {

  vaccineDetails = null;

  public vDto!: VaccinationDto[];
  form = this.formBuilder.group({
    id: '',
    vaccineCode: '',
    vaccineName: '',
    date: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private vaccineData: vaccinationServiceervice
  ) {
  }

  ngOnInit(): void {
    this.getVaccinationHistory();

  }

  getVaccinationHistory() {
    this.vaccineData.getAllVaccineDetails().subscribe(
      (resp) => {
        console.log(resp);
        // @ts-ignore
        this.vaccineDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );


  }
}





