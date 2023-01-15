import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Componentuser } from '../../component-user/componentuser';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  private apiServerUrl =environment.apiBaseUrl;

  constructor(private _http : HttpClient) { }


 login(username:string,password:string){
    return this._http.post<any>(`${this.apiServerUrl}/Kvisafast/api/v1/log/login`, { username, password})
      .pipe(map(user =>{
        if(user && user.token){
          localStorage.setItem('currentUser',
            JSON.stringify(user));
        }
        return user;
      }));

 }

 logout(){
    localStorage.removeItem('currentUSer');
 }



  public loginUserFromRemote(user :Componentuser ):Observable<any>{
  //    const headers=new HttpHeaders({Authorization:'Basic'+btoa(user.email+':'+user.password)})
      return this._http.post<any>(`${this.apiServerUrl}/Kvisafast/api/v1/log/login`,user);
  }



}
