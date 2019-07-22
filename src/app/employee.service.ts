import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  baseUrl:string="https://angular-poc-api.cfapps.io/";

  getEmployees() : Observable<Employee[]>{
    console.log("Getting all employees from URL "+this.baseUrl);
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  deleteEmployee(id:number):Observable<Employee>{
    console.log("Deleting Employee");
    return this.http.delete<Employee>(`${this.baseUrl}/deleteEmployee/`+id);
  }
}
