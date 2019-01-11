import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-color-boxes',
	templateUrl: './color-boxes.component.html',
	styleUrls: ['./color-boxes.component.css']
})
export class ColorBoxesComponent implements OnInit {

	@Input('mycolor') mycolor;

	// first:string
	// second:string
	// third:string

	constructor() { }

	ngOnInit() {
	}

	// orange(){
	// 	if(this.first === 'Orange'){
	// 		this.first = null;
	// 		return;
	// 	}
	// 	this.first = 'Orange';
	// }
	// blue(){
	// 	if(this.second === 'Blue'){
	// 		this.second = null;
	// 		return;
	// 	}
	// 	this.second = 'Blue';
	// }
	// green(){
	// 	if(this.third === 'Green'){
	// 		this.third = null;
	// 		return;
	// 	}
	// 	this.third = 'Green';
	// }

}
