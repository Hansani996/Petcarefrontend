import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {VaccinationDto} from "../dto/vaccination.dto";

@Injectable({
  providedIn: 'root'
})

export class vaccinationServiceervice {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public saveVaccination(vaccinationDto: VaccinationDto): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/vaccination/add`, vaccinationDto)
      .pipe(catchError(vaccinationServiceervice.handleError));
  }

  private static handleError(error: any): Observable<never> {
    return throwError(error);
  }

  public getAllVaccineDetails(){
    return this.http.get(this.apiServerUrl + '/vaccination/all')
  }
}
