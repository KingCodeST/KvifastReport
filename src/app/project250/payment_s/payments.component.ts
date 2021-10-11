import { Component, OnInit } from "@angular/core";

import { Payment } from "./payment";
import { PaymentService } from "./payment.service";

@Component({
    selector:'app-root',
    templateUrl:'./payment.component.html',
    styleUrls:['./payment.component.css']
})

export class PaymentComponent implements OnInit{

    payment: Payment[];
    constructor(private _paymentservice: PaymentService){}

    ngOnInit(): void{
        this.getPayment();
    }

    getPayment(): void{
        this._paymentservice.getPayment()
        .subscribe((paymentData)=>{this.payment =paymentData, console.log(paymentData)
        },
        (error)=>{
                console.log(error);
        });
    }

}