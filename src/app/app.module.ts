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
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { UpdateModalComponent } from './employee-grid/update-modal/update-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingModules,
    EmployeeComponent,
    AddSearchComponent,
    EmployeeGridComponent,
    AddEmployeeComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [EmployeeService,NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    AddEmployeeComponent,
    UpdateModalComponent,
    DeleteModalComponent
  ]
})
export class AppModule { }
