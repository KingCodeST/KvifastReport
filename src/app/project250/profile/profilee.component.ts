import { Component, OnInit } from "@angular/core";
import { Profilee } from "./profilee";
import { ProfileeService } from "./profilee.service";

@Component({

    selector:'app-profile',
    templateUrl:'./profilee.component.html',
    styleUrls:['./profile.component.css']

})

export class ProfileComponent implements OnInit{

    profiles:Profilee[];

    constructor(private _profile: ProfileeService){}

    ngOnInit():void{
        this._profile.getProfiles()
        .subscribe((profileData)=>{this.profiles =profileData, console.log(profileData)
        },(error)=>{
            console.log(error);

        });
    }






}
