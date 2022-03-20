import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {vetService} from "../services/vet.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form = this.formBuilder.group({
    username: "",
    password: "",
    cheackBox: false,

  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private vetService: vetService) {
  }

  ngOnInit(): void {
  }

  submitform() {
    console.log(this.form.value)

    var formVal = {
      username:this.form.get('username')?.value,
      password:this.form.get('password')?.value,
    }

    if (this.form.get('cheackBox')?.value){
      this.vetService.doctorLogin(formVal).subscribe(res=>{
      console.log("doctor ",res)

      })
      this.router.navigateByUrl('/vaccineHistory');
    }else{
      this.vetService.ownerLogin(formVal).subscribe(res=>{
        console.log("owner ",res)
        this.router.navigateByUrl('/user_dashboard');
      })
    }
  }


}
