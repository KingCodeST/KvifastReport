import { Injectable, Input } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Profilee } from "./profilee";
import { environment } from 'src/environments/environment';
import {Ourteams} from '../out_team/ourteams';
import {Componentuser} from '../component-user/componentuser';


@Injectable({
    providedIn: 'root'
})



export class ProfileeService{

    private apiServerUrl =environment.apiBaseUrl;


    constructor(private http: HttpClient){}

    public getProfiles():Observable<Profilee[]>{
        return this.http.get<Profilee[]>(`${this.apiServerUrl}Kvisafast/api/v1/read-all-by-email/email/`);
    }

    public addProfiles(profilee:Profilee):Observable<Profilee>{
        return this.http.post<Profilee>(`${this.apiServerUrl}/Kvisafast/api/v1/profilee/add`,profilee);
    }

    public deleteProfiles(profileeId: number):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Kvisafast/api/v1/profilee/delete/${profileeId}`);
    }

    public updateProfiles(profilee:Profilee):Observable<Profilee>{
        return this.http.put<Profilee>(`${this.apiServerUrl}/Kvisafast/api/v1/profilee/update`,profilee);
    }

    public AddTeam(teams:Ourteams):Observable<Ourteams>{
      return this.http.post<Ourteams>(`${this.apiServerUrl}/Kvisafast/api/v1/ourteam/create`,teams)
    }

  public getOurTeam():Observable<Ourteams[]>{
    return this.http.get<Ourteams[]>(`${this.apiServerUrl}/Kvisafast/api/v1/ourteam/readall`);
  }



}
