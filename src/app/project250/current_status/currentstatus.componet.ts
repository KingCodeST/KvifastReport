import { Component, Input, OnInit } from "@angular/core";
import { CurrentStatus } from "./currentstatus";
import { CurrentstatusService } from "./currentstatus.service";

@Component({

    selector: 'app-currentstatus',
    templateUrl:'./currentstatus.component.html',
    styleUrls:['./currentstatus.component.css']
   
})

export class CurrentStatusComponent implements OnInit{

    public title="view";
    

    public currentstatus: CurrentStatus[];

  
       

        constructor(private _currentService: CurrentstatusService){}

    //     ngOnInit(): void{
    //         this.getCurrentStatus();

            
    //     } 

    // getCurrentStatus(): void{
    //       this._currentService.getCurrentStatus()
    //       .subscribe((currentstateData:CurrentStatus[]) => {this.currentstatus =currentstateData, console.log(currentstateData)
    //     },
    //       (error)=>{
    //           console.log(error);
    //       });
    //     }

        ngOnInit(){
            this._currentService.getAll().subscribe(data =>{
                this.currentstatus =data;
            });
        }
        
}