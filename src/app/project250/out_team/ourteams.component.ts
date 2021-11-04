import { Component, OnInit } from "@angular/core";

import { OurTeamsService } from "./ourteams.service";
import { Ourteams } from "./ourteams";

@Component({
    selector:'app-ourteams',
    templateUrl:'./ourteam.component.html',
    styleUrls:['./ourteam.component.css']
})


export class OurteamsComponent implements OnInit{


    ourteams: Ourteams[];

    constructor(private _ourTeamsService:OurTeamsService){}


    ngOnInit(): void {
     this.getOurteams();
     this.postOurteams();
     this.updateOurteams();
     this.deleteOurteams();
    }

    getOurteams(){

    }
    postOurteams(){

    }
    updateOurteams(){

    }
    deleteOurteams(){
        
    }



}