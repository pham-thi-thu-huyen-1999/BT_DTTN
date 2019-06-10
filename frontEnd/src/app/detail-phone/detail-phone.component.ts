import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { phone } from "../models/data.class";
//location: quay lại trang
import { Location } from '@angular/common';
//import data.service, gọi lên id lấy dữ liệu qua service 
import { DataService } from "../service/data.service";
// import {} from '../phone'
@Component({
  selector: 'app-detail-phone',
  templateUrl: './detail-phone.component.html',
  styleUrls: ['./detail-phone.component.scss']
})
export class DetailPhoneComponent implements OnInit {
  sp : phone;
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
    this.dataService.getDetailPhone(_id).subscribe((d: phone) => {
      this.dataDetail = d;
    })


  }
  // goDetail() {

  // }
  ngOnInit() {
    this.goDetail();
  }

}
