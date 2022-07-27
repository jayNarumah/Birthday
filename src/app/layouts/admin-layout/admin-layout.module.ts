import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap"; 
import { AdminLayoutComponent } from "./admin-layout.component";
import { AppComponent } from "src/app/app.component";
import { AuthLayoutComponent } from "../auth-layout/auth-layout.component"; 
import { DxButtonModule, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxDateBoxModule, DxFileUploaderModule, DxFormModule, DxFunnelModule, DxPieChartModule, DxPivotGridModule, DxSelectBoxModule, DxSpeedDialActionModule, DxTabPanelModule, DxTextAreaModule, DxToolbarModule } from "devextreme-angular";
import { MakeAdminComponent } from "src/app/components/make-admin/make-admin.component";  
import { ManageAdminComponent } from "src/app/components/manage-admin/manage-admin.component";
import { AddUsersComponent } from "src/app/components/add-users/add-users.component";
import { ManageGroupComponent } from "src/app/components/manage-group/manage-group.component";
import { ComponentsModule } from "src/app/components/components.module";
import { ListOfUsersComponent } from "./list-of-users/list-of-users.component";
import { ListOfGroupComponent } from "./list-of-group/list-of-group.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { AddGroupComponent } from "src/app/components/add-group/add-group.component";
 

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ComponentsModule,
    CommonModule,   
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
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    // AppComponent,
     AdminLayoutComponent,
     AuthLayoutComponent,
      AddUsersComponent, 
      MakeAdminComponent,
    ManageGroupComponent,
    ManageAdminComponent,
    ListOfUsersComponent,
    ListOfGroupComponent,
    AddGroupComponent,
    MakeAdminComponent
    // RtlComponent
  ]
  
})
export class AdminLayoutModule {}
