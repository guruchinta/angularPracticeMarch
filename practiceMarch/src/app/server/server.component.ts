import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  server="GuruMallikharjuna DNS ";
  serverID=123;
  serverStatus:boolean = true;

  getServerStatus(){
    return this.serverStatus;
  }

  changeStatus(num:any){
    this.serverStatus = num==0? false:true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
