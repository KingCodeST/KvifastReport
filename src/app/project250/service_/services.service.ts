import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Services } from './services';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private apiServerUrl:string ='http://localhost:59555' 


  constructor(private http: HttpClient) { }


  public getServicesService():Observable<Services[]>{
    return this.http.get<Services[]>(`${this.apiServerUrl}/services`);
  }

  public addServicesService(servicesservice:Services):Observable<Services>{
    return this.http.post<Services>(`${this.apiServerUrl}/servicesservice`,servicesservice)
  }

  public deleteServicesService(servicesserviceId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/servicesserviceId/{id}`);
  }

  public updateServicesService(servicesservice:Services):Observable<Services>{
    return this.http.put<Services>(`${this.apiServerUrl}/servicesserviceId/{id}`,servicesservice);
  }





}


