import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeComponent } from './employee/employee.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModules=[HomeComponent,AboutUsComponent,ContactUsComponent,EmployeeComponent,SignUpComponent,LoginComponent];
