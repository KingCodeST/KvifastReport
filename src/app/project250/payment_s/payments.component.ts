import { Component, OnInit } from "@angular/core";

import { Payment } from "./payment";
import { PaymentService } from "./payment.service";

@Component({
    selector:'app-payment',
    templateUrl:'./payment.component.html',
    styleUrls:['./payment.component.css']
})

export class PaymentComponent implements OnInit{

    payment: Payment[];
    constructor(private _paymentservice: PaymentService){}

    ngOnInit(): void{
        this.getPayment();
    }

    getPayment(){
        this._paymentservice.getPayment()
        .subscribe(
            (paymentData: Payment[])=>{this.payment = paymentData, console.log(paymentData)
        },
        (error)=>{
                console.log(error);
        });
    }

    

}