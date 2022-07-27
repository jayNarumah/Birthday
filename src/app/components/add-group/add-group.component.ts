import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroupsEndPoint } from 'src/app/main/api/endpoints/groups.endpoint';
import { CreateGroup } from 'src/app/main/api/models/requests/create-group.model';
import { GroupsResources } from 'src/app/main/api/models/resources/group-resource.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  
  
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
     
    groupsResources: GroupsResources[]=[]; 
    
    apiModel:CreateGroup = {
      id: 0,
      name: 0,
      admin_id: 0,
      group_name: ''
    };
  
    password: string;
    profile_id: number;
    user_type: number;
  
     
    constructor( 
                private groupsEndPoint: GroupsEndPoint) {  
    }
  
    ngOnInit(): void {
      
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
          
        this.groupsEndPoint.create(this.apiModel);
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
    this.groupsResources = this.groupsResources.filter(e => e.id !== id);
    this.groupsResources.push(updateAddUsertResource);
    this.groupsResources.sort(function (a, b) {
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

