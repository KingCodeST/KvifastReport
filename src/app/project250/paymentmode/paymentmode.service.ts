import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PaymentMode } from './paymentmode';


@Injectable({
  providedIn: 'root'
})
export class PaymentmodeService {

    private baseURL:string ='//localhost:59555';
    private id:string;

    constructor(private http: HttpClient){}


  public getPaymentMode():Observable<PaymentMode[]>{
             return this.http.get<PaymentMode[]>(`${this.baseURL}/paymentmodes`);
         }
    
         public addPaymentMode(paymentmode:PaymentMode):Observable<PaymentMode>{
             return this.http.post<PaymentMode>(`${this.baseURL}/paymentmode`,paymentmode);
         }
    
         public deletePaymentMode(paymentmodeId: number):Observable<void>{
             return this.http.delete<void>(`${this.baseURL}/paymentmodes/{paymentmodeId}`);
         }
    
         public updatePaymentMode(paymentmode:PaymentMode):Observable<PaymentMode>{
             return this.http.put<PaymentMode>(`${this.baseURL}/paymentmodes/{id}`,paymentmode);
         }

}
