import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailPhoneComponent } from './detail-phone/detail-phone.component';
import { PhoneComponent } from './phone/phone.component';
import { LoginComponent } from './user/login/login.component';
import { HttpClientModule } from "@angular/common/http";
//router
import { Routes, RouterModule } from "@angular/router";

import { DataService } from "./service/data.service";
import { PayCartComponent } from './pay-cart/pay-cart.component';
import { LaptopComponent } from './laptop/laptop.component';
import { FormsModule} from '@angular/forms';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { ToastrModule } from "ngx-toastr";
import { DetailLaptopComponent } from './detail-laptop/detail-laptop.component';
// import { }

// các object
@NgModule({
  //nơi khai báo các componnent
  declarations: [
    AppComponent,
    HomeComponent,
    DetailPhoneComponent,
    PhoneComponent,
    LoginComponent,
    PayCartComponent,
    LaptopComponent,
    SignUpComponent,
    CartShoppingComponent,
    TableComponent,
    UserComponent,
    DetailLaptopComponent,
  ],
  /* nơi khai báo các module */
  imports: [
    BrowserModule,
    //(bắt buộc import ngIf, ngFor,...)
    AppRoutingModule,
  
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
    
  //  NgForm
  ],
  //quản lý phần service
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
  //là nơi khai báo componnont chạy đầu tiên
})
export class AppModule { }
