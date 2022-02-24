import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceloginService } from './servicelogin.service';
import { Componentuser } from '../component-user/componentuser';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-component-login',
  templateUrl: './componentlogin.component.html',
  styleUrls: ['./componentlogin.component.css']

})
export class ComponentLoginComponent implements OnInit {
  user =new Componentuser();
  msg ='';

  constructor(private _service : ServiceloginService,private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
     this._service.loginUserFromRemote(this.user).subscribe(
       data =>{
         console.log("response recieved");
         this._router.navigate(['/profile'])
       },
       error => {
        console.log("exception occured")
        this.msg ="Bad credentials, please enter valid email and password";
       }
     )
  }

  registerUser(){

  }

}
