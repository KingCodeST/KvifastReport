import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PaymentMode } from './paymentmode';


@Injectable({
  providedIn: 'root'
})
export class PaymentmodeService {


  constructor(private http: HttpClient){}


  public getPaymentMode():Observable<PaymentMode[]>{
             return this.http.get<PaymentMode[]>('${this.apiServerUrl}/paymentmodes');
         }
    
         public addPaymentMode(paymentmode:PaymentMode):Observable<PaymentMode>{
             return this.http.post<PaymentMode>('${this.apiServerUrl}/paymentmode',paymentmode);
         }
    
         public deletePaymentMode(paymeentmodeId: number):Observable<void>{
             return this.http.delete<void>('${this.apiServerUrl}/paymentmodes/{paymeentmodeId}');
         }
    
         public updatePaymentMode(paymentmode:PaymentMode):Observable<PaymentMode>{
             return this.http.put<PaymentMode>('${this.apiServerUrl}/paymentmodes/{id}',paymentmode);
         }

}
