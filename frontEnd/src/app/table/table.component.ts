import { Component, OnInit } from '@angular/core';
import { URL_IMG, table } from "../models/data.class";
import { DataService } from "../service/data.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data; 
  imageUrl: string = URL_IMG;
  constructor(private dataService: DataService) { }

  getAllTable(){
    this.dataService.getAllTable().subscribe((type: table ) => {
      this.data = type;
    })
  }
  ngOnInit() {
    this.getAllTable();
  }
  

}
