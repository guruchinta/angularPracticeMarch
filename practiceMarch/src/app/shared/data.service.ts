import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter:number =10;

  incrementNumber(){
    this.counter++;
  }

  decrementNumber(){
    this.counter--;
  }
  getNumber(){
    return this.counter;
  }

  constructor() { }
}
