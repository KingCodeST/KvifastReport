import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Componentuser} from './componentuser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {

  private apiServerUrl =environment.apiBaseUrl;


  constructor(private _http : HttpClient) { }

  public registerUserFromRemote(user:Componentuser):Observable<any>{
    return  this._http.post<any>(`${this.apiServerUrl}/Kvisafast/api/v1/reg/registration`,user);
  }

  public getUserservice():Observable<Componentuser[]>{
    return this._http.get<Componentuser[]>(`${this.apiServerUrl}/Kvisafast/api/v1/user/read-all-by-email`)
  }

  public getUserByEmail(email:string){
    return this._http.get<Componentuser>(`${this.apiServerUrl}/Kvisafast/api/v1/user/user`, {params:{email}
    });
  }


}

