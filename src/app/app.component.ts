import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profilee } from './profilee';
import { ProfileeService } from './profilee.service';
import { Payment } from './payment';
import { PaymentService } from './project250/payment_s/payment.service';
import { PaymentMode } from './paymentmode';
import { PaymentmodeService } from './project250/paymentmode/paymentmode.service';
import { CurrentStatus } from './project250/current_status/currentstatus';
import { CurrentstatusService } from './currentstatus.service';
import { Services } from './project250/service_/services';
import { ServicesService } from './services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kvisafastReport';
  public profilees:Profilee[];
  public servicess:Services[];
  public currentstatuss:CurrentStatus[];
  public payments:Payment[];
  public paymentmodes:PaymentMode[];
  
  constructor(
      private profileeService: ProfileeService,
      private servicesService:ServicesService,
      private currentstatusservice:CurrentstatusService,
      private paymentmodess:PaymentmodeService,
      private paymentsvc:PaymentService){}
  
  ngOnInit(){
    this.getProfilees();
    this.getCurrentStatus();
    this.getPayment();
    this.getPaymentMode();
    this.getServiceServices();

  }

  public getProfilees(): void{
    this.profileeService.getProfiles().subscribe(
      (response:Profilee[])=>{
        this.profilees =response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
      // #holla sevem
    );
  }

  public getServiceServices(): void{
    this.servicesService.getServicesService().subscribe(
      (response:Services[])=>{
        this.servicess =response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public getCurrentStatus(): void{
    this.currentstatusservice.getCurrentStatus().subscribe(
      (response:CurrentStatus[])=>{
        this.currentstatuss =response;
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public getPayment(): void{
    this.paymentsvc.getPayment().subscribe(
      (response:Payment[])=>{
        this.payments = response;
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public getPaymentMode(): void{
    this.paymentmodess.getPaymentMode().subscribe(
      (response:PaymentMode[])=>{
        this.paymentmodes = response;
      },
      (error:HttpErrorResponse) =>
      {
        alert(error.message);
      }
    );
  }

 

}
