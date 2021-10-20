import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpResponse,HttpRequest, HttpHeaders} from '@angular/common/http';
import { CurrentStatus } from './currentstatus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:'root'
})

export class CurrentstatusService {

  private apiServerUrl:string ='http://localhost:59555' 

  constructor(private http: HttpClient){} 

//   public getCurrentStatus():Observable<CurrentStatus[]>{
//     return this.http.get<CurrentStatus[]>(`${this.apiServerUrl}/currentstatuses`);
// }

public getAll():Observable<CurrentStatus[]>{
  return this.http.get<CurrentStatus[]>(this.apiServerUrl);
}

public addCurrentStatus(currentstatus:CurrentStatus):Observable<CurrentStatus>{
    return this.http.post<CurrentStatus>(`${this.apiServerUrl}/currentstatuse`,currentstatus);
}

public deleteCurrentStatus(currentstatusID: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/currentstatus/{currentstatusID}`);
}

public updateCurrentStatus(currentstatusID:CurrentStatus):Observable<CurrentStatus>{
    return this.http.put<CurrentStatus>(`${this.apiServerUrl}/currentstatus/{currentstatusID}`,currentstatusID);
}

}
