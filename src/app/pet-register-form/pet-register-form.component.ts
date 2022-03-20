import { Component, OnInit } from '@angular/core';
import {PetRegistrationDto} from "../dto/pet-registration.dto";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {PetRegistrationService} from "../services/pet-registration.service";

@Component({
  selector: 'app-pet-register-form',
  templateUrl: './pet-register-form.component.html',
  styleUrls: ['./pet-register-form.component.css']
})
export class PetRegisterFormComponent implements OnInit {
  public petReg!: PetRegistrationDto[];
  form = this.formBuilder.group({
    petName:'',
    breed: '',
    color: '',
    dob:'',
    gender:'',
    specialMarkings:''

  })


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private petRegService: PetRegistrationService
  ) { }

  ngOnInit(): void {
  }

  submitReg() {
    console.log(this.form.value);

    let petRegistrationDto = new PetRegistrationDto();
    petRegistrationDto.petName = this.form.get('petName')?.value
    petRegistrationDto.breed = this.form.get('breed')?.value
    petRegistrationDto.color = this.form.get('color')?.value
    petRegistrationDto.dob = this.form.get('dob')?.value
    petRegistrationDto.gender = this.form.get('gender')?.value
    petRegistrationDto.specialMarkings = this.form.get('speMark')?.value

    this.petRegService.savePetRegistration(petRegistrationDto)
      .subscribe(res => {
        console.log(res);
      })

    this.router.navigateByUrl('')
  }


}
