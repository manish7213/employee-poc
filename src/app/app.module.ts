import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingModules } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddSearchComponent } from './add-search/add-search.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './Shared/confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingModules,
    EmployeeComponent,
    AddSearchComponent,
    EmployeeGridComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BootstrapModalModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
