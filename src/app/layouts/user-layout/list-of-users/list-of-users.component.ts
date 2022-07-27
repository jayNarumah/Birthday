 
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddUserEndpoint } from 'src/app/main/api/endpoints/add-user.endpoint';
import { UserEndPoint } from 'src/app/main/api/endpoints/user.endpoint';
import { CreateUser } from 'src/app/main/api/models/requests/request/create-super-admin.model';
import { AddUserResources } from 'src/app/main/api/models/resources/add-user.model'; 
import { GroupsResources } from 'src/app/main/api/models/resources/group-resource.model';
import { UserAdminResources } from 'src/app/main/api/models/resources/userAdminResource.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

 
  
  @ViewChild('form') form: NgForm;
  Gender = [
    { id: 1, gender: 'Male' },
    { id: 2, gender: 'Female' }, 
];
  displayForm = false;
  operation = 'Add'; 
    id:number;
    email:string;
    name:string;
    phone_number:number;
    dob:string;
    gender:string;
   userResouces: AddUserResources[]=[];
   addUserResources: AddUserResources[]=[]; 
   apiModel:CreateUser = {
     id: 0,
     user: 0,
     email: '',
     password: '',
     gender: '',
     group: new GroupsResources,
     profile: new UserAdminResources
   };

  public contentHeader: object;
  password: string;
  profile_id: number;
  user_type: number;
  adminResources: UserAdminResources[]=[];
  group: number; 

   
  constructor(
              private userEndPoint:UserEndPoint) {  
    this.loadItem = this.loadItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Manage Courts',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/landing'
          },
          {
            name: 'Manage Courts',
            isLink: false
          }
        ]
      }
    };
    // this.addUserEndpoint.list().subscribe(
    //   ({ data }) => this.addUserResources = data,
    //   err => {
    //     console.log(err);
    //   }
    // ); 
    this.userEndPoint.list()
    .subscribe({
      next: (data) => this.addUserResources = data,
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
    this.operation === 'Update'
      ? this.userEndPoint.update(this.id,this.apiModel)    
      : this.userEndPoint.create(this.apiModel);
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
      this.hideForm();
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
  let addUserResources = this.addUserResources.find(
    item => item.id === id.row.data.id
  );
  console.log(addUserResources);
  Object.assign(this.apiModel, addUserResources);
  this.id=id.row.data.id;
  // this.email=this.apiModel.email;; 
  // this.phone_number=this.apiModel.profile.phone_number;
  // this.group=this.apiModel.group.group_id; 
  this.gender=this.apiModel.profile.gender;
  this.dob=this.apiModel?.profile?.dob;
  
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
        this.userEndPoint.delete(id.row.data.id).subscribe(
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
