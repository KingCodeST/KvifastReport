import {Component, Input, OnInit, ViewChild, ElementRef,AfterViewInit,Renderer2} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Componentuser} from './componentuser';
import {UserregistrationService} from './userregistration.service';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {error} from 'protractor';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

    savedusers: Componentuser[];
  public edituser :Componentuser=new Componentuser();
  msg ="";
 public addForm: NgForm;

  constructor(private registationService:UserregistrationService,
              private _router: Router,
              private renderer: Renderer2,
              private route: ActivatedRoute) { }

//   @Input(){
//     fname:string;
// }
//



  ngOnInit(): void {
    this.getRegisteredUsers();
    this.registerUser();
  }

  public getRegisteredUsers(): void{
    this.registationService.registerUserFromRemote(this.edituser).subscribe(
      (response:Componentuser[]) =>{
        this.savedusers =response;
        console.log(this.savedusers);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }

      );

  }

  userRegistration(addForm: NgForm){
    document.getElementById('register-user-form').click();
    this.registationService.registerUserFromRemote(addForm.value).subscribe(
      (response: Componentuser)=> {
        console.log(response);
        this._router.navigate(['/profile']);
        this.getRegisteredUsers();
        addForm.reset();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
      () =>{
        let form: HTMLFormElement =<HTMLFormElement>document.getElementById('registerform')

        form.submit();
      }
    );

  }
  registerUser(){
    this.registationService.registerUserFromRemote(this.edituser).subscribe(
      data=>{
        console.log("response received");
        this._router.navigate(['/profile'])
        
      },error => {
        console.log("exception occurred")
        this.msg ="Bad credentials, please enter valid email and password";
      }
    )
  }

}
