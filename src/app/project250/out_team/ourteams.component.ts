import { Component, OnInit } from "@angular/core";

import { OurTeamsService } from "./ourteams.service";
import { Ourteams } from "./ourteams";

@Component({
    selector:'app-ourteams',
    templateUrl:'./ourteam.component.html',
    styleUrls:['./ourteam.component.css']
})

export class OurteamsComponent implements OnInit{


    ourteamsx: Ourteams[];

    constructor(private _ourTeamsService:OurTeamsService){}


    ngOnInit(): void {
     this.getOurteams();
     this.postOurteams();
     this.updateOurteams();
     this.deleteOurteams();
    }

    getOurteams(){
      this._ourTeamsService.getOurTeam()
        .subscribe((ourteamdata)=>{this.ourteamsx=ourteamdata,
              console.log(ourteamdata)
        },(error )=> {
          console.log(error);
          }
        );
    }
    postOurteams(){

    }
    updateOurteams(){

    }
    deleteOurteams(){

    }



}
