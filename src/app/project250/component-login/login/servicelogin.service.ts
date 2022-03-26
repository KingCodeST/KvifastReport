import { HttpClient, HttpClientModule } from '@angular/common/http';
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


  public loginUserFromRemote(user :Componentuser ):Observable<any>{
      return this._http.post<any>(`${this.apiServerUrl}/log/login`,user);
  }



}
