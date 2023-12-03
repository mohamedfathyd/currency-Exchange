import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { UsersInterFace } from '../models/users-model';
import { DepartmentsInterFace } from '../models/departments-model';
import { PerformancesInterFace } from '../models/performancs-model';
import { CurrencyInterFace } from '../../authentication/models/currency-model';
import { LoginInterFace } from '../../authentication/models/login-model';

@Injectable({
  providedIn: 'root'
})
export class HomeScreenService {
  private baseUrl=environment.api;
  private access_key=environment.access_key;
  constructor(private httpc: HttpClient) { }
  refreshToken(body): Observable<LoginInterFace>{
    let headers = new HttpHeaders();
    headers.append("No-Auth", "True");
    headers.append("Content-Type", "application/json; charset=utf-8");  
    return this.httpc.post<LoginInterFace>(this.baseUrl+"User/RefreshToken", body, { headers: headers });
  }
  getCurrencies(): Observable<CurrencyInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");  
    return this.httpc.get<CurrencyInterFace>(`${this.baseUrl}/latest?access_key=${this.access_key}`, { headers: headers });
  }
  CurrencyExchange(body){
    let url=`${this.baseUrl}/convert?access_key=${this.access_key}&from=${body.from}&to=${body.to}&amount=${body.amount}`
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");  
    return this.httpc.get<CurrencyInterFace>(url, { headers: headers });
  }
  CurrencyHistory(){
    let url=`${this.baseUrl}/timeseries?access_key=${this.access_key}`
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");  
    return this.httpc.get<CurrencyInterFace>(url, { headers: headers });
  }
}