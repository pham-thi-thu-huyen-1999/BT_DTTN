import { Component, OnInit} from '@angular/core';
import { DataService } from "./service/data.service";
import { URL, phone} from "./models/data.class"
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent{
  title = 'my-Project';
  // phones = phone[];
  listSearchURL_laptop =  URL;
  constructor( public dataService: DataService, private router: Router){

  }
  _search : string;
  get search(): string{
    return this._search;
  }
  set search(value: string){ 
    this._search = value;
    // this.listSearchURL_laptop = this.search ? this.phones.filter(p =>p. )
  }
  logout(){
    localStorage.removeItem('personalUser');
    this.router.navigate(['/login'])
  }
  // filtersp(){
  //   return this.listSearchURL_laptop
  // }

}
