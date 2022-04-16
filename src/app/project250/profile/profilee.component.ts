import { Component, OnInit } from "@angular/core";
import { Profilee } from "./profilee";
import { ProfileeService } from "./profilee.service";
import {Componentuser} from '../component-user/componentuser';

@Component({

    selector:'app-profile',
    templateUrl:'./profilee.component.html',
    styleUrls:['./profile.component.css']

})

export class ProfileComponent implements OnInit{
    users:Componentuser[];
  public user:Componentuser=new Componentuser();
    profiles:Profilee[];

    constructor(private _profile: ProfileeService){}

    ngOnInit():void{
        this.getUserProfile();
    }

    getUserProfile():void{
      this.user =JSON.parse(localStorage.getItem('user'));

      if (this.user){
        this.user


      }
    }







}
