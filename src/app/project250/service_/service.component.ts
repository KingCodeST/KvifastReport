import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Services } from "./services";
import { ServicesService } from "./services.service";
import {Router} from '@angular/router';

@Component({

    selector:'app-service',
    templateUrl:'service.component.html',
    styleUrls:['./service.component.css']
})

export class ServicesComponent implements OnInit{

    _services: Services[];

    constructor(private _serviceService: ServicesService,private _router: Router){}

    ngOnInit(): void{
        this.getService();

    }



    getService():void{
        this._serviceService.getServicesService()
        .subscribe((serviceData) =>{this._services =serviceData, console.log(serviceData)
        },
        (error)=>{
        console.log(error);
        });

    }

    public onAddService(addForm: NgForm): void{
        document.getElementById('add-')


    }



}
