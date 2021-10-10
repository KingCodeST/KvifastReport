import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentStatusComponent } from './project250/current_status/currentstatus.componet';
import { ProfileComponent } from './project250/profile/profilee.component';
import { ServicesComponent } from './project250/service_/service.component';
import { PaymentComponent } from './project250/payment_s/payments.component';
import { PaymentmodeComponent } from './project250/paymentmode/paymentmode.component';
import { CurrentstatusService } from './project250/current_status/currentstatus.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CurrentStatusComponent,
    PaymentComponent,
    ProfileComponent,
    ServicesComponent,
    PaymentComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [CurrentstatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
