import {Component, OnInit, ViewChild} from '@angular/core';
import { Profilee } from "./profilee";
import { ProfileeService } from "./profilee.service";
import {Componentuser} from '../component-user/componentuser';
import {UserregistrationService} from '../component-user/userregistration.service';
import {error} from 'protractor';

@Component({

    selector:'app-profile',
    templateUrl:'./profilee.component.html',
    styleUrls:['./profile.component.css']

})

export class ProfileComponent implements OnInit{
    users:Componentuser;
  public user:Componentuser=new Componentuser();
    profiles:Profilee[];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  private errorMessage: string;

    constructor(private _profile: ProfileeService,private registationService:UserregistrationService){}

    ngOnInit():void{

    }


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

    // getUserProfile():void{
    //   this.user =JSON.parse(localStorage.getItem('user'));
    //
    //   if (this.user){
    //     this.user
    //   }
    // }

  // getOurteams(){
  //   this._ourTeamsService.getOurTeam()
  //     .subscribe((ourteamdata)=>{this.ourteamsx=ourteamdata,
  //         console.log(ourteamdata)
  //       },(error )=> {
  //         console.log(error);
  //       }
  //     );
  // }
  email: string;

  getUsersByMails(email: string): void{
     this.registationService.getUserByEmail(email)
       .subscribe(
         users => this.users = users,
          error => this.errorMessage ='Error retrieving user'
       );
  }

  getOurTeam():void{
  }






}
//
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
