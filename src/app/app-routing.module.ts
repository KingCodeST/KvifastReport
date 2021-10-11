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
  {path:'paymentmode',component:PaymentmodeComponent},
  {path:'service',component:ServicesComponent},
  {path:'profile',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
