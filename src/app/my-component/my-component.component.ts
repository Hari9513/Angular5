import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
mycolor;
myName;
myUpdatedName;

  constructor(
    private subjectService : SubjectService
  ) { 
    this.mycolor = 'blue';
   }

  ngOnInit() {
    this.getUserName();
    this.updateName();
  }

  getUserName(){
    this.subjectService.userName$.subscribe(value => {
      this.myUpdatedName = value;
    })
  }

  updateName() {
    this.subjectService.updateUserName(this.myName);

  }

};
