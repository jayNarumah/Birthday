import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateUser } from 'src/app/main/api/models/requests/request/create-super-admin.model';
import { AddUserEndpoint } from 'src/app/main/api/endpoints/add-user.endpoint'; 
import { AddUserResources } from 'src/app/main/api/models/resources/add-user.model';
 
import Swal from 'sweetalert2';
import { GroupsEndPoint } from 'src/app/main/api/endpoints/groups.endpoint';
import { GroupsResources } from 'src/app/main/api/models/resources/group-resource.model';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  selectedGender: number;

    Gender = [
        { id: 1, gender: 'Male' },
        { id: 2, gender: 'Female' }, 
    ];
  
  @ViewChild('form') form: NgForm;
  displayForm = true;
  operation = 'Add'; 
    id:number;
    email:string;
    name:string;
    phone_number:number;
    dob:Date;
    gender:string;
 
  addUserResources: AddUserResources[]=[]; 
  groupsResources: GroupsResources[]=[]; 
  
  apiModel:CreateUser = {
    id: 0,
    user: 0,
    email: '',
    password: '',
    gender: 'Select Gender',
    profile: undefined,
    group: new GroupsResources
  };

  password: string;
  profile_id: number;
  user_type: number;

   
  constructor(private addUserEndpoint:AddUserEndpoint,
              private groupsEndPoint: GroupsEndPoint) {  
  }

  ngOnInit(): void {
    
    this.addUserEndpoint.list()
    .subscribe({
      next: (data) => this.addUserResources = data,
      error: (error) => console.log(error),
    });
    this.groupsEndPoint.list()
    .subscribe({
      next: (data) => this.groupsResources = data,
      error: (error) => console.log(error),
    });
  }
  showForm() {
   
    this.displayForm = true;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  hideForm() {
    this.displayForm = false;
    this.form?.reset();
  }
  
processForm(e) {
  this.save();
}
save() {
  
  Swal.showLoading( );
 
  let httpCall =
        
      this.addUserEndpoint.create(this.apiModel);
  httpCall.subscribe(
    success => {
      Swal.close();
      this.updateList(this.id, success.data);  
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Operation successful',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
      this.resetForm();
    },
    error => {
      console.log(error);
      Swal.close();
      Swal.fire({
        text:'Process Unsuccessful'+ error.error.message +'error',
       icon: 'error',
        title: 'Error!', 
        customClass: {
          confirmButton: 'btn btn-danger'
        }});
    });
}

updateList(id, updateAddUsertResource) {
  this.addUserResources = this.addUserResources.filter(e => e.id !== id);
  this.addUserResources.push(updateAddUsertResource);
  this.addUserResources.sort(function (a, b) {
    return a.id - b.id;
  });
} 
  addItem() {
    this.showForm();
    this.resetForm();
  }
  resetForm() {
    this.form?.reset();
    this.operation = "Add"; 
  }

}
