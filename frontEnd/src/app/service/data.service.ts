import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { phone, laptop, table, URL, user, details } from "../models/data.class";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
// import {  } from "./";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = URL;
  constructor(public http: HttpClient) { }
  getAllData(): Observable<any>{
    return this.http.get<any>(`${this.url}`)
  }
  getAllPhone(): Observable<phone> {
    return this.http.get<phone>(`${this.url}/phones`);
  }
  getAllLaptop(): Observable<laptop> {
    return this.http.get<laptop>(`${this.url}/laptops`)
  }
  getAllTable(): Observable<table> {
    return this.http.get<table>(`${this.url}/tables`)
  }
  getDetailPhone(_id: string): Observable<phone> {
    return this.http.get<phone>(`${this.url}/phones/${_id}`);
  }
  getDetailLaptop(_id: string): Observable<laptop> {
    return this.http.get<laptop>(`${this.url}/laptops/${_id}`);
  }
  getDetailTable(_id: string): Observable<table> {
    return this.http.get<table>(`${this.url}/tables/${_id}`);
  }
  getCart(){
    
  }
  getAllUser(): Observable<user>{
    return this.http.get<user>(`${this.url}/users`)
  }
  get_User(email) {
    return this.http.get<user>(`${this.url}/users/` + email);
  }
  // insertSignup(email, username, password) {
  //   var data = "username" + username + "&password=" + password;
  //   var reqHeader = new HttpHeaders({ 'Content-Type': 'applicationn' })
  //   return this.http.post(`${this.url}/users`, { email, username, password });
  // }
  //post user: đăng ký 1 user mới
  signupUser(User: user){
     let body = {
      email: User.email,
      password: User.password,
      reapeatPassword: User.reapeatPassword,
      username: User.username,
      adddress: User.adddress
      
    }
    console.log(User)
    var reqHeader = new HttpHeaders({'no-auth': 'true'});
    return this.http.post(`${this.url}/users`, body,{headers: reqHeader} )
  }
  
  // search(name: string): Observable<>{

  // }
  // find(id: string): this.url_phone {
  //   return
  // }\

  // getSelectedIndex(id: string){
  //   for(var i = 0; i < this.url_phone.length; i++){
  //     if(this.url_phone[i].typeOf(id) == id){
  //       return i;
  //     }
  //   }
  //   return -1;
  // }
  //dang ki


}
