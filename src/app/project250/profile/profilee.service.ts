import { Injectable, Input } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Profilee } from "./profilee";
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})



export class ProfileeService{

    private apiServerUrl =environment.apiBaseUrl;


    constructor(private http: HttpClient){}

    public getProfiles():Observable<Profilee[]>{
        return this.http.get<Profilee[]>(`${this.apiServerUrl}/profiles/`);
    }

    public addProfiles(profilee:Profilee):Observable<Profilee>{
        return this.http.post<Profilee>(`${this.apiServerUrl}/profilee/add`,profilee);
    }

    public deleteProfiles(profileeId: number):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/profilee/delete/${profileeId}`);
    }

    public updateProfiles(profilee:Profilee):Observable<Profilee>{
        return this.http.put<Profilee>(`${this.apiServerUrl}/profilee/update`,profilee);
    }

}
