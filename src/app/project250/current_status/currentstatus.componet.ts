import { Component, Input, OnInit } from "@angular/core";
import { CurrentStatus } from "./currentstatus";
import { CurrentstatusService } from "./currentstatus.service";

@Component({

    selector: 'app-currentstatus',
    templateUrl:'./currentstatus.component.html',
    styleUrls:['./currentstatus.componet.css']

})

export class CurrentStatusComponent implements OnInit{

    public title="view";

   currentstatus: CurrentStatus[];

        @Input() childItem = '';
        classes = 'special';

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