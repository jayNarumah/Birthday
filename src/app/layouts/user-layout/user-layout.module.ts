import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutes, UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { Sidebar2Component } from './user-layout/sidebar2/sidebar2.component';
import { Navbar2Component } from './user-layout/navbar2/navbar2.component';
import { Footer2Component } from './user-layout/footer2/footer2.component';
import { AdminLayoutRoutes } from '../admin-layout/admin-layout.routing'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DxButtonModule, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxDateBoxModule, DxFileUploaderModule, DxFormModule, DxFunnelModule, DxPieChartModule, DxPivotGridModule, DxSelectBoxModule, DxSpeedDialActionModule, DxTabPanelModule, DxTextAreaModule, DxToolbarModule } from 'devextreme-angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddUsers2Component } from './user-layout/add-users2/add-users2.component';
import { Dashboard2Component } from './user-layout/dashboard2/dashboard2.component'; 
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ListOfTodaysBirthdayComponent } from './user-layout/list-of-todays-birthday/list-of-todays-birthday.component';
import { ExistingUserComponent } from './user-layout/existing-user/existing-user.component';


@NgModule({
  declarations: [
    UserLayoutComponent,
    Sidebar2Component,
    Navbar2Component,
    Footer2Component,
    AddUsers2Component,
    Dashboard2Component,
    ListOfUsersComponent,
    ListOfTodaysBirthdayComponent,
    ExistingUserComponent,
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ComponentsModule,
    FormsModule,
    NgbModule,   
    DxFileUploaderModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    DxPivotGridModule,
    DxChartModule,
    DxCheckBoxModule,
    DxPieChartModule,
    DxFileUploaderModule,
    DxFunnelModule,
    DxTabPanelModule,
     DxButtonModule,
    DxToolbarModule, 
    // SweetAlert2Module.forRoot(),
    ReactiveFormsModule, 
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxSpeedDialActionModule, 
    NgSelectModule,
    NgSelectModule,
    FormsModule

  
  ]
})
export class UserLayoutModule { }
