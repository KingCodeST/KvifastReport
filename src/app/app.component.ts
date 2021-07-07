import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profilee } from './profilee';
import { ProfileeService } from './profilee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kvisafastReport';
  public profilee:Profilee[];
  
  constructor(private profileeService: ProfileeService){}

  ngOnInit(){
    this.getProfilees();
  }

  public getProfilees(): void{
    this.profileeService.getProfiles().subscribe(
      (response:Profilee[])=>{
        this.profilee =response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

}
