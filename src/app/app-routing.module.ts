import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentStatusComponent } from './project250/current_status/currentstatus.componet';
import { PaymentmodeComponent } from './project250/paymentmode/paymentmode.component';
import { PaymentComponent } from './project250/payment_s/payments.component';
import { ProfileComponent } from './project250/profile/profilee.component';
import { ServicesComponent } from './project250/service_/service.component';


const routes: Routes = [
  {path:'currentstatus',component:CurrentStatusComponent},

  {path:'payment',component:PaymentComponent},
  {path:'pay',component:PaymentComponent},
  {path:'cancel',component:PaymentComponent},
  {path:'paymentmode',component:PaymentmodeComponent},
  {path:'choose',component:PaymentmodeComponent},
  {path:'service',component:ServicesComponent},
  {path:'add',component:ServicesComponent},
  {path:'edit',component:ServicesComponent},
  {path:'delete',component:ServicesComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addprofile',component:ProfileComponent},
  {path:'edit',component:ProfileComponent},
  {path:'delete',component:ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
