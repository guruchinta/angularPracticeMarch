import { Component, OnInit, Input, Output } from '@angular/core';
import { Head2Component } from '../head2/head2.component'
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-head1',
  templateUrl: './head1.component.html',
  styleUrls: ['./head1.component.scss']
})
export class Head1Component implements OnInit {

  count:number =0;

 
  
  ValueChange(num:number){
    if(num==0){
      this.ds.incrementNumber();
    }
    else{
      this.ds.decrementNumber();
    }
    this.count=this.ds.getNumber();

  }
  constructor( private ds: DataService) {
      
   }

  ngOnInit(): void {
    this.count =this.ds.getNumber();
  }

}
