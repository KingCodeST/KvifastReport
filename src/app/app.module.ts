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
import { home } from './project250/home/home.component';
import { OurteamsComponent } from './project250/out_team/ourteams.component';
import { ComponentLoginComponent } from './component-login/component-login.component';
import { ComponentAdminComponent } from './project250/component-admin/component-admin.component';
import { ComponentUserComponent } from './component-user/component-user.component';


@NgModule({
  declarations: [
    AppComponent,
    home,
    CurrentStatusComponent,
    PaymentComponent,
    ProfileComponent,
    ServicesComponent,
    PaymentmodeComponent,
    OurteamsComponent,
    ComponentLoginComponent,
    ComponentAdminComponent,
    ComponentUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
