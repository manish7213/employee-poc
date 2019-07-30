import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './Employee';
import { catchError, map, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  baseUrl:string="https://angular-poc-api-2.cfapps.io/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  

  getEmployees() : Observable<Employee[]>{
    console.log("Getting all employees from URL "+this.baseUrl);
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  deleteEmployee(id:number):Observable<Employee>{
    console.log("Deleting Employee" + id);
    return this.http.delete<Employee>(`${this.baseUrl}/deleteEmployee/`+id);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl+"/addEmployee", employee, this.httpOptions).pipe(
      tap((newEmp: Employee) => this.log(`added employee w/ id=${newEmp.empID}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  updateEmployee (employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl+"/updateEmployee", employee, this.httpOptions)
      .pipe(
        catchError(this.handleError('updateEmployee', employee))
      );
  }

  getEmployee(id:string):Observable<Employee> {
   return this.http.get<Employee>(this.baseUrl+"/employee/id"); 
  }
  private log(message: string) {
    console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  

}
