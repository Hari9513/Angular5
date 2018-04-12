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
isShow:boolean

  constructor() { }

  ngOnInit() {
  this.isShow = true;
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

flightDetails = [
{
"id": 1,
"name": "Jet Airways",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-11T01:58:13.768Z",
"arrivalTime": "2018-04-11T02:58:13.768Z"
},
{
"id": 2,
"name": "Air India",
"bordingPoint": "Mumbai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-12T01:58:13.768Z",
"arrivalTime": "2018-04-12T02:58:13.768Z"
},
{
"id": 3,
"name": "IndiGo",
"bordingPoint": "Bangalore",
"destinationPoint": "Kolkata",
"departureTime": "2018-04-15T01:58:13.768Z",
"arrivalTime": "2018-04-15T02:58:13.768Z"
},
{
"id": 4,
"name": "SpiceJet",
"bordingPoint": "Delhi",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-14T01:58:13.768Z",
"arrivalTime": "2018-04-14T02:58:13.768Z"
},
{
"id": 5,
"name": "GoAir",
"bordingPoint": "Kolkata",
"destinationPoint": "Chennai",
"departureTime": "2018-04-13T01:58:13.768Z",
"arrivalTime": "2018-04-13T02:58:13.768Z"
},
{
"id": 6,
"name": "Vistara",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-17T01:58:13.768Z",
"arrivalTime": "2018-04-17T02:58:13.768Z"
},
{
"id": 7,
"name": "Zoom Air",
"bordingPoint": "Kolkata",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-19T01:58:13.768Z",
"arrivalTime": "2018-04-19T02:58:13.768Z"
},
{
"id": 8,
"name": "Blue Dart Aviation",
"bordingPoint": "Chennai",
"destinationPoint": "Mumbai",
"departureTime": "2018-04-13T01:58:13.768Z",
"arrivalTime": "2018-04-13T02:58:13.768Z"
},
{
"id": 9,
"name": "Deccan Charters",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-17T01:58:13.768Z",
"arrivalTime": "2018-04-17T02:58:13.768Z"
},
{
"id": 10,
"name": "TajAir",
"bordingPoint": "Chennai",
"destinationPoint": "Delhi",
"departureTime": "2018-04-15T01:58:13.768Z",
"arrivalTime": "2018-04-15T02:58:13.768Z"
},
{
"id": 11,
"name": "Titan Aviation",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-11T01:58:13.768Z",
"arrivalTime": "2018-04-11T02:58:13.768Z"
}
];

onClick(){
	if(this.isShow == true){
	this.isShow = false;
	return;
	}

	this.isShow = true;
	
}

};
