import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CurrentStatus } from './currentstatus';

@Injectable({
  providedIn: 'root'
})
export class CurrentstatusService {

  constructor(private http: HttpClient){}

  public getCurrentStatus():Observable<CurrentStatus[]>{
    return this.http.get<CurrentStatus[]>('${this.apiServerUrl}/currentstatuses');
}

public addCurrentStatus(currentstatus:CurrentStatus):Observable<CurrentStatus>{
    return this.http.post<CurrentStatus>('${this.apiServerUrl}/currentstatuse',currentstatus);
}

public deleteCurrentStatus(paymeentmodeId: number):Observable<void>{
    return this.http.delete<void>('${this.apiServerUrl}/currentstatus/{paymeentmodeId}');
}

public updateCurrentStatus(currentstatusID:CurrentStatus):Observable<CurrentStatus>{
    return this.http.put<CurrentStatus>('${this.apiServerUrl}/currentstatus/{currentstatusID}',currentstatusID);
}

}
