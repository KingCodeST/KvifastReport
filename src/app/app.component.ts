import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profilee } from './profilee';
import { ProfileeService } from './profilee.service';
import { Payment } from './payment';
import { PaymentService } from './payment.service';
import { PaymentMode } from './paymentmode';
import { PaymentmodeService } from './paymentmode.service';
import { CurrentStatus } from './currentstatus';
import { CurrentstatusService } from './currentstatus.service';
import { Services } from './services';
import { ServicesService } from './services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kvisafastReport';
  public profilees:Profilee[];
  public services:Services[];
  public currentstatus:CurrentStatus[];
  public payment:Payment[];
  public paymentmode:PaymentMode[];
  
  constructor(private profileeService: ProfileeService,servicesService:ServicesService,currentstatusservice:CurrentstatusService,paymentmodes:PaymentmodeService,paymentsvc:PaymentService){}
  
  ngOnInit(){
    this.getProfilees();
    
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

}
