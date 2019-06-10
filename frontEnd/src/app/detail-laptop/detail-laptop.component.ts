import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { phone, laptop } from "../models/data.class";
//location: quay lại trang
import { Location } from '@angular/common';
//import data.service, gọi lên id lấy dữ liệu qua service 
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-detail-laptop',
  templateUrl: './detail-laptop.component.html',
  styleUrls: ['./detail-laptop.component.scss']
})
export class DetailLaptopComponent implements OnInit {
  //kiể dữ liệu latop
  sp: laptop;
  dataDetail;

  constructor(
    //ActivatedRoute: có các module: snapshot, paramMap lấy dữ liệu theo id
    private route: ActivatedRoute,
    // private location: Location,
    private dataService: DataService
  ) { }

  goDetail(): void {
    let _id = this.route.snapshot.paramMap.get('_id');
    console.log(_id)
    this.dataService.getDetailLaptop(_id).subscribe((d: laptop) => {
      this.dataDetail = d;
    })


  }
  ngOnInit() {
    this.goDetail();
  }

}
