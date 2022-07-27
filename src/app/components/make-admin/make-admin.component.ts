import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { AddUserEndpoint } from 'src/app/main/api/endpoints/add-user.endpoint';
import { CreateAdminEndpoint } from 'src/app/main/api/endpoints/create-admin.endpoint';
import { GroupsEndPoint } from 'src/app/main/api/endpoints/groups.endpoint';
import { AddUserResources } from 'src/app/main/api/models/resources/add-user.model';
import { GroupAdmin } from 'src/app/main/api/models/resources/group-admin.model';
import { GroupsResources } from 'src/app/main/api/models/resources/group-resource.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-admin',
  templateUrl: './make-admin.component.html',
  styleUrls: ['./make-admin.component.scss']
})
export class MakeAdminComponent implements OnInit {

  constructor(
    private groupsEndPoint: GroupsEndPoint,
    private addUserEndpoint: AddUserEndpoint,
    private createAdminEndpoint: CreateAdminEndpoint) { }

  groupsResources: GroupsResources[] = [];
  addUserResources: AddUserResources[] = [];
  apiModel: GroupAdmin = {
    email: '',
    group_id: undefined,
  };
  @ViewChild('form') form: NgForm;
  displayForm = true;
  operation = 'Add';
  id: number;
  email: string;
  name: string;
  group_id: number;

  ngOnInit(): void {

    this.groupsEndPoint.list()
      .subscribe({
        next: (data) => this.groupsResources = data,
        error: (error) => console.log(error),
      });

    this.addUserEndpoint.list()
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

    Swal.showLoading();
    console.log(this.apiModel);
    let httpCall =

    this.createAdminEndpoint.create(this.apiModel);
    httpCall.subscribe(

      success => {
      Swal.close(); 
      this.updateList(this.id, success.data);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Operation successful',
          customClass: {
            confirmButton: 'btn btn-success',
          }});
        this.resetForm();
      
      },
      error => {
        // console.log(error + 'i am here' + this.apiModel.group_name+''+this.apiModel.email);
        Swal.close();
        Swal.fire({
          text: 'Process Unsuccessful' + error.error.message + 'error',
          icon: 'error',
          title: 'Error!',
          customClass: {
            confirmButton: 'btn btn-danger'
          }
        });
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