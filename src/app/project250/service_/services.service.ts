import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Services } from './services';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private apiServerUrl =environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  public getServicesService():Observable<Services[]>{
    return this.http.get<Services[]>(`${this.apiServerUrl}/service/readall`);
  }

  public addServicesService(servicesservice:Services):Observable<Services>{
    return this.http.post<Services>(`${this.apiServerUrl}/service/create`,servicesservice)
  }

  public deleteServicesService(servicesserviceId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/serviceId/delete/{id}`);
  }

  public updateServicesService(servicesservice:Services):Observable<Services>{
    return this.http.put<Services>(`${this.apiServerUrl}/serviceId/update/{id}`,servicesservice);
  }





}


