import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PaymentMode } from './paymentmode';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentmodeService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}


  public getPaymentMode():Observable<PaymentMode[]>{
             return this.http.get<PaymentMode[]>(`${this.apiServerUrl}/Kvisafast/api/v1/paymentmodes/readall`);
         }

         public addPaymentMode(paymentmode:PaymentMode):Observable<PaymentMode>{
             return this.http.post<PaymentMode>(`${this.apiServerUrl}/Kvisafast/api/v1/paymentmode/create`,paymentmode);
         }

         public deletePaymentMode(paymentmodeId: number):Observable<void>{
             return this.http.delete<void>(`${this.apiServerUrl}/Kvisafast/api/v1/paymentmodes/delete/{paymentmodeId}`);
         }

         public updatePaymentMode(paymentmode:PaymentMode):Observable<PaymentMode>{
             return this.http.put<PaymentMode>(`${this.apiServerUrl}/Kvisafast/api/v1/paymentmodes/update/{id}`,paymentmode);
         }

}
