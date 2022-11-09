import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrentStatusComponent } from './project250/current_status/currentstatus.componet';
import { ProfileComponent } from './project250/profile/profilee.component';
import { ServicesComponent } from './project250/service_/service.component';
import { PaymentComponent } from './project250/payment_s/payments.component';
import { PaymentmodeComponent } from './project250/paymentmode/paymentmode.component';
import { HttpClientModule } from '@angular/common/http';
import { home } from './project250/home/home.component';
import { OurteamsComponent } from './project250/out_team/ourteams.component';
import { LoginComponent } from './project250/component-login/login/login.component';
import { UserregistrationComponent } from './project250/component-user/userregistration.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './project250/aboutus/aboutus.component';
import { AccountComponent } from './project250/account/account.component';
import { UploadImageComponent } from './project250/upload-image/upload-image.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    LoginComponent,
    UserregistrationComponent,
    AboutusComponent,
    AccountComponent,
    UploadImageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
