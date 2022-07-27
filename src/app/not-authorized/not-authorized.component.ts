import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
 

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss']
})
export class NotAuthorizedComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  backclick(){
this.location.back();
  }
}
