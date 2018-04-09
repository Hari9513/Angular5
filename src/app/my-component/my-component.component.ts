import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
first:string
second:string
third:string

  constructor() { }

  ngOnInit() {
  }
orange(){
if(this.first === 'Orange'){
this.first = null;
return;
}
this.first = 'Orange';
}
blue(){
if(this.second === 'Blue'){
this.second = null;
return;
}
this.second = 'Blue';
}
green(){
if(this.third === 'Green'){
this.third = null;
return;
}
this.third = 'Green';
}

}
