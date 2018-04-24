import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form = {};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
  	console.log(this.form);
  }

}
