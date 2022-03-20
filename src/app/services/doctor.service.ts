import {VetDto} from "../dto/vet.dto";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DoctorService{
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http : HttpClient) {
  }

  public getAllVet(vetDto:VetDto){
    return this.http.get<any>(`${this.apiServerUrl}/doctor/all`)
  }
}
