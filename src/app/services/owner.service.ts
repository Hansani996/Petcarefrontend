import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Owner } from '../owner';
import {catchError, Observable, pipe, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import {PetRegistrationDto} from "../dto/pet-registration.dto";
import {OwnerRegistrationDto} from "../dto/owner-registration.dto";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getOwners(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/owner/all`)
  }

  //Register owner

  public saveOwnerRegistration(OwnerRegistrationDto:OwnerRegistrationDto): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/owner/add` , OwnerRegistrationDto)
    .pipe(catchError(OwnerService.handleError));
  }

  private static handleError(error: any): Observable<never> {
    return throwError(error);
  }
}
