import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {PetRegistrationDto} from "../dto/pet-registration.dto";

@Injectable({
  providedIn: 'root'
})

export class PetRegistrationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public savePetRegistration(registerDto: PetRegistrationDto): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/v1/pet/add`, registerDto)
      .pipe(catchError(PetRegistrationService.handleError));
  }

  private static handleError(error: any): Observable<never> {
    return throwError(error);
  }
}
