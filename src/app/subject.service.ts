import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class SubjectService {


  userNameSubject : Subject<string> = new Subject<string>();
  userName$ : Observable<string> = this.userNameSubject.asObservable();

  constructor() { }


  updateUserName(name : string){
    this.userNameSubject.next(name);
  }

}
