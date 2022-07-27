 
import { Component, OnInit } from '@angular/core';
import { ListOfBirthdayEndPoint } from 'src/app/main/api/endpoints/list-of-birth-count.endpoint'; 
import { ListOfBirthdaysResource } from 'src/app/main/api/models/resources/list-of-birth.model';

@Component({
  selector: 'app-list-of-todays-birthday',
  templateUrl: './list-of-todays-birthday.component.html',
  styleUrls: ['./list-of-todays-birthday.component.scss']
})
export class ListOfTodaysBirthdayComponent implements OnInit {

  
  
  listOFBirthdayResource: ListOfBirthdaysResource[]=[];
  
  constructor(private listOfBirthdaysEndPoint:ListOfBirthdayEndPoint) { }

  ngOnInit(): void {
    this.listOfBirthdaysEndPoint.list()
    .subscribe({ next:(data)=> this.listOFBirthdayResource=data,
    error: (error)=> console.log(error),
     })
  }; 
}
