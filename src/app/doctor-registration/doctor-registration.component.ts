import { Component, OnInit } from '@angular/core';
import {VetDto} from "../dto/vet.dto";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {vetService} from "../services/vet.service";


@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {


  public vetReg!: VetDto[];
  form = this.formBuilder.group({
    vetId:'',
    firstName: '',
    lastName: '',
    nic:'',
    email:'',
    mobNumber:'',
    pw:''

  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private vetService : vetService) {
  }


  ngOnInit(): void {
  }


  submitform() {
    console.log(this.form.value)

    let vetDto = new VetDto();

    vetDto.vetId = this.form.get('')?.value
    vetDto.vetFirstName = this.form.get('firstName')?.value
    vetDto.vetLastName = this.form.get('lastName')?.value
    vetDto.vetEmail = this.form.get('email')?.value
    vetDto.vetNic = this.form.get('nic')?.value
    vetDto.vetMobileNum = this.form.get('mobNumber')?.value
    vetDto.password = this.form.get('pw')?.value

    this.vetService.saveVetDetails(vetDto)
      .subscribe(res=> {
        console.log(res)

        this.router.navigateByUrl("/vaccination_form");
      });

  }
}
