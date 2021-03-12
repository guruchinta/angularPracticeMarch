import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-head2',
  templateUrl: './head2.component.html',
  styleUrls: ['./head2.component.scss']
})
export class Head2Component implements OnInit {

  constructor( private shared:DataService) { }

    
  count:number | undefined;
  ngOnInit(): void {
    this.count = this.shared.getNumber();
  }

  MessageSend(){
    this.count = this.shared.getNumber();
  }
 

}
