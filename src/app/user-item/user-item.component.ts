import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name:string; //CREATED A NEW PROPERTY CALLED NAME

  constructor() {

    this.name="Felipe"; //set a new name
   }

  ngOnInit() {
  }

}
