import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TableComponent } from "./table/table.component";
import { LoginComponent } from "./user/login/login.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { DetailPhoneComponent } from "./detail-phone/detail-phone.component";
import { DetailLaptopComponent } from "./detail-laptop/detail-laptop.component";
// import { DetailPhoneComponent } from "./";
import { PayCartComponent } from "../app/pay-cart/pay-cart.component";
import { UserComponent } from "./user/user.component";

import { CartShoppingComponent } from "../app/cart-shopping/cart-shopping.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'table', component: TableComponent },
  { path: 'detail-phone/:_id', component: DetailPhoneComponent },
  { path: 'detail-laptop/:_id', component:  DetailLaptopComponent},

  // { path: 'detail-table/:_id', component: DetailPhoneComponent },
  { path: 'pay-cart', component: PayCartComponent },
  {
    path: 'user', component: UserComponent,
    children: [{ path: 'sign-up', component: SignUpComponent }]
  },
  {
    path: 'user', component: UserComponent,
    children: [{ path: 'login', component: LoginComponent },]
  },
  // { path: 'registration', component: RegistrationComponent},
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
