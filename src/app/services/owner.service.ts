import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Owner } from '../owner';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getOwners(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/owner/all`)
  }

  public addOwner(owner: Owner): Observable<Owner>{
    return this.http.post<Owner>(`${this.apiServerUrl}/owner/add` , owner);
  }
}
