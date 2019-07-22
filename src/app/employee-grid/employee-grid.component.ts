import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent implements OnInit {

  employeeList:Employee[] = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {

    this.employeeService.getEmployees().subscribe(data => this.employeeList = data);
  }

  onDelete(index:number,id:number){
    console.log("Index is "+index+" Id is "+id);
    this.employeeList.splice(index,1);
    this.employeeService.deleteEmployee(id).subscribe(data => console.log("deleted",data));
  }

}
