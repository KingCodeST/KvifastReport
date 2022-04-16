import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Ourteams } from './ourteams';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn:'root'
})
export class OurTeamsService{


    private apiServerUrl =environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getOurTeam():Observable<Ourteams[]>{
      return this.http.get<Ourteams[]>(`${this.apiServerUrl}/Kvisafast/api/v1/ourteam/readall`);
  }

  public addOurteams(id:Ourteams):Observable<Ourteams>{
      return this.http.post<Ourteams>(`${this.apiServerUrl}/Kvisafast/api/v1/ourteam/create`,id);
  }

  public deleteOurteams(id: number):Observable<void>{
      return this.http.delete<void>('${this.apiServerUrl}/Kvisafast/api/v1/ourteam/delete/{id}');
  }

  public updateOurteams(id:Ourteams):Observable<Ourteams>{
      return this.http.put<Ourteams>('${this.apiServerUrl}/Kvisafast/api/v1/ourteam/update/{Id}',id);
  }



}
