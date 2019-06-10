import { Component, OnInit } from '@angular/core';
import { CART } from "../models/data.class";

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.scss']
})
export class CartShoppingComponent implements OnInit {
  cart: CART[];
  dataOder;

  constructor() { }

  ngOnInit() {
  }

}
