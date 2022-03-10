import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'kvisafastReport';
  parentItem = 'lamp';
  myimage:string ="./assets/media/images.jpeg"
}
