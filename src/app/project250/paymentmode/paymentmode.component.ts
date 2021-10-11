import { Component, OnInit } from "@angular/core";
import { PaymentMode } from "./paymentmode";
import { PaymentmodeService } from "./paymentmode.service";

@Component({

    selector:'app-paymentmode',
    templateUrl:'./paymentmode.component.html',
    styleUrls:['./paymentmode.component.css']

})

export class PaymentmodeComponent implements OnInit{

    _paymentmode : PaymentMode[];

    constructor(private _paymentMode: PaymentmodeService){}

    ngOnInit():void{
        this.getPaymentMode();
    }

    getPaymentMode(): void{
        this._paymentMode.getPaymentMode()
        .subscribe((paymentmodeData)=>{this._paymentmode =paymentmodeData, console.log(paymentmodeData)
        },
        (error) =>{
            console.log(error);
        });

    }

}