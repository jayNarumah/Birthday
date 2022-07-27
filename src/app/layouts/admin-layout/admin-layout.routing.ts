import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { AddUsersComponent } from "src/app/components/add-users/add-users.component";
import { MakeAdminComponent } from "src/app/components/make-admin/make-admin.component";
import { ManageAdminComponent } from "src/app/components/manage-admin/manage-admin.component"; 
import { ManageGroupComponent } from "src/app/components/manage-group/manage-group.component";
import { ListOfUsersComponent } from "./list-of-users/list-of-users.component";
import { ListOfGroupComponent } from "./list-of-group/list-of-group.component";
import { AddGroupComponent } from "src/app/components/add-group/add-group.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "add-users", component: AddUsersComponent }, 
  { path: "make-admin", component: MakeAdminComponent },
  { path: "manage-admin", component: ManageAdminComponent }, 
  { path: "manage-groups", component: ManageGroupComponent }, 
  { path: "list-of-users", component: ListOfUsersComponent },
  { path: "list-of-groups", component: ListOfGroupComponent }, 
  { path: "add-group", component: AddGroupComponent }, 
  
  { path: "assign-admin", component: MakeAdminComponent },
  


  // { path: "rtl", component: RtlComponent }
];
