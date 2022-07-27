
import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExistingUserEndPoint } from 'src/app/main/api/endpoints/existing-user.endpoint'; 

import { CreateExistingUser } from 'src/app/main/api/models/requests/create-existing-user.model'; 
import { ExistingUserResources } from 'src/app/main/api/models/resources/existing-user.model'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-existing-user',
  templateUrl: './existing-user.component.html',
  styleUrls: ['./existing-user.component.scss']
})
export class ExistingUserComponent implements OnInit {
 
      
      
      @ViewChild('form') form: NgForm;
      displayForm = true;
      operation = 'Add'; 
        id:number;
        email:string;
        name:string;
        phone_number:number;
        dob:Date;
        gender:string;
       
      existingUserResources:ExistingUserResources[]=[]; 
      
      
      apiModel:CreateExistingUser = {
        email: '',
      };
    
      password: string;
      profile_id: number;
      user_type: number;
    
       
      constructor(private existingUserEndPoint:  ExistingUserEndPoint) {}
    
      ngOnInit(): void {
        
    
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
            
          this.existingUserEndPoint.create(this.apiModel);
      httpCall.subscribe(
        success => {
          Swal.close();
          this.updateList(this.email, success.data);  
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
    
    updateList(email, updateAddUsertResource) {
      this.existingUserResources = this.existingUserResources.filter(e => e.email !== email);
      this.existingUserResources.push(updateAddUsertResource);
      this.existingUserResources.sort(function (a, b) {
        return a.email - b.email;
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

