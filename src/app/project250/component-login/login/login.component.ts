import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ServiceloginService} from './servicelogin.service';
import {Componentuser} from '../../component-user/componentuser';
import {HttpErrorResponse} from '@angular/common/http';
import {error} from 'protractor';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage:string;
  loginForm:FormGroup;
  loading = false;
  submitted = false;

public user:Componentuser=new Componentuser();
saveuser:Componentuser[];
 msg='';
  constructor(
    private _service:ServiceloginService,
    private _router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginUser();
    this.getLoginUser();
    this.loginForm = this.formBuilder.group({
        username:['', Validators.required],
        password:['', Validators.required]
    });
  }

  get f(){
  return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;
    this._service.loginUserFromRemote(
      this.f.username.value
      ).subscribe(
        data =>{
          console.log(data)
          this._router.navigate(['/profile']);
        },
      error =>{
          this.loading = false;
      }
    )

  }

  login(){
    this._service.login(
      this.username,
      this.password
    ).subscribe(
      () =>{
        this._router.navigate(['/profile'])
      },
      error =>{
        this.errorMessage ='UserName or Password is Incorrect';
      }
    );
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
        console.log(data);
      },
      error =>{
        console.log("exception occurred")
        this.msg ="Bad credentials, please enter valid email and password";
      }
    )
  }



}
