import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

import { Profilee } from "./profilee";
import { ProfileeService } from "./profilee.service";

@Component({

    selector:'app-root',
    templateUrl:'./profilee.component.html',
    styleUrls:['./profile.component.css']

})

export class ProfileComponent implements OnInit{

    profile:Profilee[];

    constructor(private _profile: ProfileeService){}

    ngOnInit():void{
        this._profile.getProfiles()
        .subscribe((profileData)=>{this.profile =profileData, console.log(profileData)
        },(error)=>{
            console.log(error);
    
        });
    }

}