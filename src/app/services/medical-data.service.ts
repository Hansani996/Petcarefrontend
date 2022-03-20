import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {MedicalDataDto} from "../dto/medicalData.dto";
import {catchError, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class MedicalDataService{
  private apiServerUrl = environment.apiBaseUrl
  private static handleError: any;



  constructor(private http : HttpClient) {
  }

  public saveMedicalData(medicalDataDto: MedicalDataDto): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/medicalData/add`, medicalDataDto)
      .pipe(catchError(MedicalDataService.handleError));
  }

  public getAllMedicaldata(){
    return this.http.get(this.apiServerUrl + '/medicalData/all')
  }
}
