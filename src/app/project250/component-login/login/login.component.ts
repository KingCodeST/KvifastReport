import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ServiceloginService} from './servicelogin.service';
import {Componentuser} from '../../component-user/componentuser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user:Componentuser=new Componentuser();
 msg='';
  constructor(private _service:ServiceloginService,private _router: Router) { }

  ngOnInit(): void {
    this.loginUser();
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/home'])

      },
      error =>{
        console.log("exception occurred")
        this.msg ="Bad credentials, please enter valid email and password";
      }
    )
  }



}
