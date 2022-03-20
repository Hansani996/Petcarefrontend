import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {VetDto} from "../dto/vet.dto";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class vetService{

  private apiServerUrl = environment.apiBaseUrl


  constructor(private http : HttpClient) {
  }

  public saveVetDetails(vetDto:VetDto): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/doctor/add`, vetDto)
      .pipe(catchError(vetService.handleError));
  }

  public doctorLogin(form:any): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/doctor/login`, form)
      .pipe(catchError(vetService.handleError));
  }

  public ownerLogin(form:any): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/owner/login`, form)
      .pipe(catchError(vetService.handleError));
  }
  private static handleError(error: any): Observable<never> {
    return throwError(error);
  }




}
