import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroupsEndPoint } from 'src/app/main/api/endpoints/groups.endpoint';
import { CreateGroup } from 'src/app/main/api/models/requests/create-group.model';
import { GroupsResources } from 'src/app/main/api/models/resources/group-resource.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-of-group',
  templateUrl: './list-of-group.component.html',
  styleUrls: ['./list-of-group.component.scss']
})
export class ListOfGroupComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  groupResources:GroupsResources[]=[];
  apiModel:CreateGroup={
    id: undefined,
    name: 0,
    group_name: '',
    admin_id: 0
  }
  displayForm = false;
  operation = 'Add';
  id: any;
  admin_id: number;
  group_name: string;
    
  constructor(private groupsEndpoint: GroupsEndPoint) {  
    this.loadItem = this.loadItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  ngOnInit(): void {
    
    this.groupsEndpoint.list()
    .subscribe({
      next: (data) => {
        this.groupResources = data;
        console.log("Resources:", this.groupResources);
        console.log("Data:", data);
      },
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
      ? this.groupsEndpoint.update(this.id,this.apiModel)    
      : this.groupsEndpoint.create(this.apiModel);
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
  this.groupResources = this.groupResources.filter(e => e.id !== id);
  this.groupResources.push(updateAddUsertResource);
  this.groupResources.sort(function (a, b) {
    return a.id - b.id;
  });
}
resetForm() {
  this.form?.reset();
  this.operation = "Add"; 
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
      this.groupsEndpoint.delete(id.row.data.id).subscribe(
        _ => {
          this.groupResources = this.groupResources.filter(
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
loadItem(id) {
  let addUserResource = this.groupResources.find(
    item => item.id === id.row.data.id
  );
  console.log(addUserResource);
  Object.assign(this.apiModel, addUserResource);
  this.id = id.row.data.id;
  this.id =this.apiModel.id; 
  this.group_name = this.apiModel.group_name; 
  
  this.operation = 'Update';
  this.showForm();
}

}
