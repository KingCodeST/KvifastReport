import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiServerUrl:string ='http://localhost:59555' 

  constructor(private http: HttpClient){}

  public getPayment():Observable<Payment[]>{
    return this.http.get<Payment[]>('${this.apiServerUrl}/payments');
}

public addPayment(paymentmode:Payment):Observable<Payment>{
    return this.http.post<Payment>('${this.apiServerUrl}/payment',paymentmode);
}

public deletePayment(paymeentmodeId: number):Observable<void>{
    return this.http.delete<void>('${this.apiServerUrl}/payment/{paymeentmodeId}');
}

public updatePayment(paymentId:Payment):Observable<Payment>{
    return this.http.put<Payment>('${this.apiServerUrl}/payment/{paymentId}',paymentId);
}


}
