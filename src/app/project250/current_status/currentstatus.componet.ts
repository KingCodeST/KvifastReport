import { Component, OnInit } from "@angular/core";
import { CurrentStatus } from "./currentstatus";
import { CurrentstatusService } from "./currentstatus.service";

@Component({

    selector: 'app-currentstatus',
    templateUrl:'./currentstatus.component.html',
    styleUrls:['./currentstatus.componet.css']

})

export class CurrentStatusComponent implements OnInit{

    

        currentstatus: CurrentStatus[];

       
        

        constructor(private _currentService: CurrentstatusService){}

        ngOnInit(): void{
            this.getCurrentStatus();
        } 

    getCurrentStatus(): void{
          this._currentService.getCurrentStatus()
          .subscribe((currentstateData) => {this.currentstatus =currentstateData, console.log(currentstateData)
        },
          (error)=>{
              console.log(error);
          });
        }

}