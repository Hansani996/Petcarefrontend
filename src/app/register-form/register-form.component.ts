import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {OwnerService} from '../services/owner.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {PetRegistrationService} from "../services/pet-registration.service";
import {PetRegistrationDto} from "../dto/pet-registration.dto";
import {OwnerRegistrationDto} from "../dto/owner-registration.dto";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


//change owers !
  public owners!: Owner[];
  form = this.formBuilder.group({
    nic:'',
    firstName: '',
    lastName: '',
    email:'',
    password:'',
    mobileNum:''

  })


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private ownerService: OwnerService){

  }

  public getOwners(): void {
    this.ownerService.getOwners().subscribe(
      (response: Owner[]) => {
        this.owners = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
  }

  //Register button
  next(){
    console.log(this.form.value);

    let ownerRegistrationDto = new OwnerRegistrationDto();
    ownerRegistrationDto.email = this.form.get('email')?.value
    ownerRegistrationDto.firstName =this.form.get('firstName')?.value
    ownerRegistrationDto.lastName= this.form.get('lastName')?.value
    ownerRegistrationDto.nic=this.form.get('nic')?.value
    ownerRegistrationDto.password=this.form.get('password')?.value
    ownerRegistrationDto.mobileNum = this.form.get('mobileNum')?.value

    this.ownerService.saveOwnerRegistration(ownerRegistrationDto)
      .subscribe(res=>{
        console.log(res)

        this.router.navigateByUrl('/pet_registration')
      })
  }

}
