 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingUserComponent } from 'src/app/layouts/user-layout/user-layout/existing-user/existing-user.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { AddUsers2Component } from './user-layout/add-users2/add-users2.component';
import { Dashboard2Component } from './user-layout/dashboard2/dashboard2.component'; 
import { ListOfTodaysBirthdayComponent } from './user-layout/list-of-todays-birthday/list-of-todays-birthday.component';

export const UserLayoutRoutes: Routes = [
  
  { path: "dashboard2", component: Dashboard2Component }, 
  { path: "add-users2", component: AddUsers2Component }, 
  { path: "list-of-users2", component: ListOfUsersComponent }, 
  { path: "todays-birthday", component: ListOfTodaysBirthdayComponent }, 
  { path: "existing-user", component: ExistingUserComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(UserLayoutRoutes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
