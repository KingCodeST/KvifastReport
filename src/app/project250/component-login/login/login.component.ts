import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ServiceloginService} from './servicelogin.service';
import {Componentuser} from '../../component-user/componentuser';
import {HttpErrorResponse} from '@angular/common/http';
import {error} from 'protractor';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user:Componentuser=new Componentuser();
saveuser:Componentuser[];
 msg='';
  constructor(private _service:ServiceloginService,private _router: Router) { }

  ngOnInit(): void {
    this.loginUser();
    this.getLoginUser();
  }

  public addForm: NgForm;

  public getLoginUser(): void{
    this._service.loginUserFromRemote(this.user).subscribe(
      (response:Componentuser[]) =>{
        this.saveuser = response;
        console.log(this.saveuser);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
    }
    );
  }

  userLogin(addForm:NgForm){
    document.getElementById('login-user-form').click();
    this._service.loginUserFromRemote(addForm.value).subscribe(
      (response: Componentuser)=> {
        console.log(response);
        this._router.navigate(['/profile']);
        this.getLoginUser();
        addForm.reset();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        this.msg ="Bad Credentials, please enter valid email and password";
        addForm.reset();
      }
    )
  }


  // old user registration
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
