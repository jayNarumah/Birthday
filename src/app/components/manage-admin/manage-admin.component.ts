import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { GroupsEndPoint } from 'src/app/main/api/endpoints/groups.endpoint';  
import { CreateAdmin } from 'src/app/main/api/models/requests/Create-Admin.model';
import { AddUserResources } from 'src/app/main/api/models/resources/add-user.model';
import { CreateUserAdminResources } from 'src/app/main/api/models/resources/create-user-admin-resource.model';
import { GroupsResources } from 'src/app/main/api/models/resources/group-resource.model';
import { UserAdminResources } from 'src/app/main/api/models/resources/userAdminResource.model';
import Swal from 'sweetalert2';
import { AdminEndPoint } from '../../main/api/endpoints/Admin.endpoint'; 

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {
  displayForm = false;
  operation = 'Add';
  @ViewChild('form') form: NgForm;

  selectedGender: number;

  Gender = [
      { id: 1, gender: 'Male' },
      { id: 2, gender: 'Female' }, 
  ];
  
  name: string;
  id: number;
  groupsResources: GroupsResources[];
  phone_number: number;
  email: string;
  dob: string;
  group: number;
  rowIndex=0;
  // apiModel:CreateAdmin;

  userAdminResources:UserAdminResources[]=[];
  apiModel:CreateUserAdminResources={
    id: 0,
    email: '',
    name: '',
    group: new GroupsResources,
    profile: new AddUserResources,
    phone_number: 0,
    dob: '',
    gender: ''
  }
 
  constructor(private adminEndPoint: AdminEndPoint, 
              private groupEndPoint: GroupsEndPoint) {  
    this.loadItem = this.loadItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  ngOnInit(): void {
    this.adminEndPoint.list()
      .subscribe({
        next: (data) => this.userAdminResources = data,
        error: (error) => console.log(error),
      });
      this.groupEndPoint.list()
      .subscribe({
        next: (data) => this.groupsResources = data,
        error: (error) => console.log(error),
      });
   
      
  } 
  deleteItem(id) {
    Swal.fire({
      title: 'Delete',
      text: "Are you sure you want to delete this record?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(result => {
      if (result.value) {
        this.adminEndPoint.delete(id.row.data.id).subscribe(
          _ => {
            this.userAdminResources = this.userAdminResources.filter(
              e => e.id !== id.row.data.id
            );
            // this.alert.success('Record deleted');
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your record has been deleted.',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            });
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Error!!',
              text: error,
              customClass: {
                confirmButton: 'btn btn-danger'
              }
            });
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }showForm() {
   
    this.displayForm = true;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  loadItem(id) {
    let userAdminResources = this.userAdminResources.find(
      item => item.id === id.row.data.id
    );
    console.log(userAdminResources);
    Object.assign(this.apiModel, userAdminResources);
    this.id = id.row.data.id;
    this.apiModel.id =this.id; 
    this.apiModel.name=this.apiModel?.profile?.name;
    this.apiModel.gender=this.apiModel?.profile?.gender; 
    this.apiModel.dob=this.apiModel?.profile?.dob;
    this.apiModel.phone_number=this.apiModel?.profile?.phone_number;


    // this.group_name = this.group_name; 
    
    this.operation = 'Update';
    this.showForm();
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
    this.operation === 'Update'
      ? this.adminEndPoint.update(this.id,this.apiModel)    
      : this.adminEndPoint.create(this.apiModel);
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
updateList(id, updateuserAdminResources) {
  this.userAdminResources = this.userAdminResources.filter(e => e.id !== id);
  this.userAdminResources.push(updateuserAdminResources);
  this.userAdminResources.sort(function (a, b) {
    return a.id - b.id;
  });
}
resetForm() {
  this.form?.reset();
  this.operation = "Add"; 
}
 
}
