import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceloginService } from './servicelogin.service';
import { Componentuser } from '../component-user/componentuser';

@Component({
  selector: 'app-component-login',
  templateUrl: './componentlogin.component.html',
  styleUrls: ['./componentlogin.component.css']

})
export class ComponentLoginComponent implements OnInit {
  user =new Componentuser();

  constructor(private _service : ServiceloginService) { }

  ngOnInit(): void {
  }

  loginUser(){
    //  this._service.loginUserFromRemote();
  }

  registerUser(){

  }

}
