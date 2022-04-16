import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Services } from './services';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private apiServerUrl =environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  public getServicesService():Observable<Services[]>{
    // let username='client'
    // let password='Abc123'
    // const headers=new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});

    return this.http.get<Services[]>(`${this.apiServerUrl}/Kvisafast/api/v1/service/readall`);
  }

  public addServicesService(servicesservice:Services):Observable<Services>{
    return this.http.post<Services>(`${this.apiServerUrl}/Kvisafast/api/v1/service/create`,servicesservice)
  }

  public deleteServicesService(servicesserviceId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Kvisafast/api/v1/serviceId/delete/{id}`);
  }

  public updateServicesService(servicesservice:Services):Observable<Services>{
    return this.http.put<Services>(`${this.apiServerUrl}/Kvisafast/api/v1/serviceId/update/{id}`,servicesservice);
  }





}


