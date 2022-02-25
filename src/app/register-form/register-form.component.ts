import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../services/owner.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  
//change owers !
  public owners!: Owner[];
    
  constructor(private ownerService: OwnerService) { }

  public getOwners(): void{
    this.ownerService.getOwners().subscribe(
      (response: Owner[]) => {
        this.owners = response;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
      
    );
  }

  ngOnInit(): void {
  }


  
}
