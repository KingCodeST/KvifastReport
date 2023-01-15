import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
     styleUrls: ['./home.component.css']
 })

 export class home {
  images: any[];

    title:'Home ';

  slideConfig = {'slidesToshow': 1,'slidesToScroll':2,'dots':true,'autoplay':true };

    constructor() {

      this.images = [
        {imgss:'assets/img/cover.jpeg', name: 'This is supporse to be  an image ' },
        {imgss:'assets/img/images.jpeg', name: 'This is supporse to be  an image ' },
        {imgss:'https://via.placeholder.com/150', name: 'This is supporse to be  an image ' },
        {imgss:'https://via.placeholder.com/150', name: 'This is supporse to be  an image ' }
      ];

    }

 }
