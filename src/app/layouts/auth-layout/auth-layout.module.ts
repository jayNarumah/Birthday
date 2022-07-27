import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

// import { RtlComponent } from '../../pages/rtl/rtl.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DxFileUploaderModule, DxSelectBoxModule, DxTextAreaModule, DxDateBoxModule, DxFormModule, DxDataGridModule, DxSpeedDialActionModule, DxPivotGridModule, DxChartModule, DxCheckBoxModule, DxPieChartModule, DxFunnelModule, DxTabPanelModule, DxButtonModule, DxToolbarModule } from 'devextreme-angular';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule, FormsModule,
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
  ],
 
  declarations: [
    // RtlComponent,
    LoginPageComponent
  ]
})
export class AuthLayoutModule { }
