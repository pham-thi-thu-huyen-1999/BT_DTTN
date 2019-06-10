import { Component, OnInit } from '@angular/core';
import { URL} from "../models/data.class";
import { DataService } from "../service/data.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pay-cart',
  templateUrl: './pay-cart.component.html',
  styleUrls: ['./pay-cart.component.scss']
})
export class PayCartComponent implements OnInit {
  _URL_phone = URL;
  
  constructor(private dataService: DataService, ) { };
  // _price_num = _price_num;
  // _URL_phone = 0;
  addCart(_price_num: number){
    
  }

  ngOnInit() {
  }

}
