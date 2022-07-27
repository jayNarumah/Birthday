import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router"; 
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'; 
import { UserLayoutComponent } from "./layouts/user-layout/user-layout/user-layout.component";
import { AuthGuard } from "./layouts/auth-layout/auth.guards";
import { LoginPageComponent } from "./layouts/auth-layout/login-page/login-page.component";
import { NotAuthorizedComponent } from "./not-authorized/not-authorized.component";
import { Role } from "./main/api/models/resources/role";
// import { AdminLayout2Component } from "./layouts/admin-layout2/admin-layout2.component";

const routes: Routes = [ 
  {
    path: "admin",
    component: AdminLayoutComponent,
    loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule),
    canActivate: [AuthGuard],
    data: { delay: false, preload: true, roles: ['Super Admin'] }
  },
  {
    path: "user",
    component: UserLayoutComponent,
    loadChildren: () => import ("./layouts/user-layout/user-layout.module").then(m => m.UserLayoutModule),
    canActivate: [AuthGuard],
    data: { delay: false, preload: true, roles: ['Admin']  }
  },
   {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule),
    
  },
   {
    path: "not-authorised",
    component: NotAuthorizedComponent,
  
  },
  {
    path: "",
    redirectTo: "/auth/login",
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: '/not-authorised' //Error 404 - Page not found
  },
  {
    path: 'landing',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
    data: { delay: false, preload: true }
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
