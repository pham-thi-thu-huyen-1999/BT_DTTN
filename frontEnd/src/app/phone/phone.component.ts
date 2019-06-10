import { Component, OnInit } from '@angular/core';
import { phone, URL_IMG, URL } from '../models/data.class';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})

export class PhoneComponent implements OnInit {
  dataPhone;
  url: URL;
  _phone: phone[];
  imageUrl: string = URL_IMG;
  constructor(
    private _connectAPI: DataService
  ) { };

  product;
  listSearchPhone: phone[];

  _search: string;
  get search(): string {
    return this._search
  }
  set search(value: string) {
    this.search = value;
    this.listSearchPhone = this.search ? this.product.filter(p => p.phone_name.toLowerCase().includes(this.search) == true) : [];
  }
  searchPhone(searchString: string) {
    return this._phone.filter(name => {
      name.phone_name.toLowerCase().indexOf(searchString.toLowerCase()) == -1;
    })
  }
  _getAllPhone() {
    this._connectAPI.getAllPhone().subscribe((d:phone) => {
      this.dataPhone = d;
      this.product=d;
      console.log(d)
    })
    this.dataPhone = this._connectAPI.getAllPhone();
  }
  ngOnInit() {
    this._getAllPhone();
  }
}
