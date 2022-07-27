import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateUser } from 'src/app/main/api/models/requests/request/create-super-admin.model';
import { AddUserEndpoint } from 'src/app/main/api/endpoints/add-user.endpoint'; 
import { AddUserResources } from 'src/app/main/api/models/resources/add-user.model';
 
import Swal from 'sweetalert2';
import { GroupCountEndPoint } from 'src/app/main/api/endpoints/group-count.endpoint';
import { GroupsResources } from 'src/app/main/api/models/resources/group-resource.model';
import { GroupsEndPoint } from 'src/app/main/api/endpoints/groups.endpoint';
import { UserEndPoint } from 'src/app/main/api/endpoints/user.endpoint';
import { CreateAdminUser } from 'src/app/main/api/models/requests/create-user.model';

@Component({
  selector: 'app-add-users2',
  templateUrl: './add-users2.component.html',
  styleUrls: ['./add-users2.component.scss']
})
export class AddUsers2Component implements OnInit {

  
  @ViewChild('form') form: NgForm;
  displayForm = true;
  operation = 'Add'; 
    id:number;
    email:string;
    name:string;
    phone_number:number;
    dob:Date;
    gender:string;
    selectedGender: number;

    Gender = [
        { id: 1, gender: 'Male' },
        { id: 2, gender: 'Female' }, 
    ];
  groupResources: GroupsResources[]=[]; 
  addUserResources: AddUserResources[]=[]; 
  apiModel:CreateAdminUser= {
    id: 0,
    email: '',
    gender: 'Select Gender',
    name: '',
    phone_number:undefined,
    dob: undefined
  };

  public contentHeader: object;
  password: string;
  profile_id: number;
  user_type: number;

   
  constructor(private addUserEndpoint:AddUserEndpoint,
              private UserEndpoint: UserEndPoint,
              private groupEndPoint: GroupsEndPoint) {  
    this.loadItem = this.loadItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  ngOnInit(): void {
    // this.contentHeader = {
    //   headerTitle: 'Manage Courts',
    //   actionButton: true,
    //   breadcrumb: {
    //     type: '',
    //     links: [
    //       {
    //         name: 'Home',
    //         isLink: true,
    //         link: '/landing'
    //       },
    //       {
    //         name: 'Manage Courts',
    //         isLink: false
    //       }
    //     ]
    //   }
    // };
    // this.addUserEndpoint.list().subscribe(
    //   ({ data }) => this.addUserResources = data,
    //   err => {
    //     console.log(err);
    //   }
    // ); 
    this.addUserEndpoint.list()
    .subscribe({
      next: (data) => this.addUserResources = data,
      error: (error) => console.log(error),
    });
    this.groupEndPoint.list()
    .subscribe({
      next: (data) => this.groupResources = data,
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
  this.UserEndpoint.create(this.apiModel);
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
  loadItem(id) {
    let addUserResource = this.addUserResources.find(
      item => item.id === id.row.data.id
    );
    console.log(addUserResource);
    Object.assign(this.apiModel, addUserResource);
    this.id = id.row.data.id;
    this.email =this.apiModel.email; 
    this.gender = this.apiModel.gender;
    this.phone_number =this.apiModel.phone_number;  
    this.dob =this.apiModel.dob;

     
    this.operation = 'Update';
    this.showForm();
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
        this.addUserEndpoint.delete(id.row.data.id).subscribe(
          _ => {
            this.addUserResources = this.addUserResources.filter(
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
