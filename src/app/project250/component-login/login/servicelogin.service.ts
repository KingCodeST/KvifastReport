import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Componentuser } from '../../component-user/componentuser';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  private apiServerUrl =environment.apiBaseUrl;

  constructor(private _http : HttpClient) { }


  // login(user :Componentuser):Observable<any>{
  //   const headers =new HttpHeaders({Authorization:'Basic'+btoa(user.email+':'+user.password)});
  //   return this._http.get("http://localhost:16906/Kvisafast/api/v1/",{headers,responseType:'text'as'json' })
  // }

  // getUser(user :Componentuser){
  //   const headers=new HttpHeaders({Authorization:'Basic'+btoa(user.email+':'+user.password)});
  //   return this._http.get("http://localhost:16906/Kvisafast/api/v1//log/login",{headers});
  // }



  public loginUserFromRemote(user :Componentuser ):Observable<any>{
  //    const headers=new HttpHeaders({Authorization:'Basic'+btoa(user.email+':'+user.password)})
      return //this._http.post<any>(`${this.apiServerUrl}/Kvisafast/api/v1/log/login`,user);
  }



}
