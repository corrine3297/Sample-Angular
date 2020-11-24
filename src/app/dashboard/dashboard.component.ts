import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DbServiceService } from '../db-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataList:Data[]=[]

  constructor(public services:DbServiceService) { 
    this.services.getData().subscribe(data=>{
      console.log(data)
      this.dataList = data.data
      // this.dataList=data.data.student
    })
  }

  ngOnInit(): void {
  }

}
