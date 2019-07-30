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
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingModules,
    EmployeeComponent,
    AddSearchComponent,
    EmployeeGridComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService,NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteModalComponent
  ]
})
export class AppModule { }
