import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  first:string
  second:string
  third:string

  orange(){
  this.first = 'Orange';
  }
  blue(){
  this.second = 'Blue';
  }
  green(){
  this.third = 'Green';
  }

}
