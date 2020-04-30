import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private headerSrc=new BehaviorSubject(null);
  currentHeader=this.headerSrc.asObservable();

  private modalSrc=new BehaviorSubject(null);
  current=this.modalSrc.asObservable();

  constructor() { }

  changeHeader(success:boolean){
    console.log(success);
    this.headerSrc.next(success);
  }
  
  changeValues(success:boolean){
    console.log(success);
    this.modalSrc.next(success);
  }
  

}
