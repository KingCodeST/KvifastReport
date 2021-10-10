import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpResponse,HttpRequest, HttpHeaders} from '@angular/common/http';
import { CurrentStatus } from './currentstatus';

@Injectable()
export class CurrentstatusService {

  constructor(private http: HttpClient){}

  public getCurrentStatus():Observable<CurrentStatus[]>{
    return this.http.get<CurrentStatus[]>('${this.apiServerUrl}/currentstatuses');
}

public addCurrentStatus(currentstatus:CurrentStatus):Observable<CurrentStatus>{
    return this.http.post<CurrentStatus>('${this.apiServerUrl}/currentstatuse',currentstatus);
}

public deleteCurrentStatus(currentstatusID: number):Observable<void>{
    return this.http.delete<void>('${this.apiServerUrl}/currentstatus/{currentstatusID}');
}

public updateCurrentStatus(currentstatusID:CurrentStatus):Observable<CurrentStatus>{
    return this.http.put<CurrentStatus>('${this.apiServerUrl}/currentstatus/{currentstatusID}',currentstatusID);
}

}
