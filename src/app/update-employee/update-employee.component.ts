import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../Employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeList: Employee[] = [];
  updateEmployeeForm: FormGroup;
  emp: Employee;
  constructor(public activeModal: NgbActiveModal, private employeeService: EmployeeService) {
  }

  getEmployeeFromService(id: string) {

    return this.employeeService.getEmployee(id).subscribe(data => this.emp = data);

  }

  ngOnInit() {
   
    this.updateEmployeeForm = new FormGroup({
      empID: new FormControl(''),
      empName: new FormControl(''),
      organization: new FormControl(''),
      role: new FormControl(''),
      project: new FormControl(''),
      location: new FormControl('')
    });
    
  }


  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  onUpdateEmployee(form:FormGroup) {
    //   console.log("Employee is " + employee);
    //   console.log("Employee List is "+this.employeeList);
    //  // this.renderOnForm(employee);
    //   this.employeeService.updateEmployee(this.updateEmployeeForm.value).subscribe(data => console.log("added ", data))
    //   this.employeeList.push(employee);
    //   this.closeModal();
    // this.emp = this.getEmployeeFromService(id);
    
    let index = form.getRawValue().index
  if(index != null) {
    this.employeeList[index] = form.value
  } else {
    this.employeeList.push(form.value)      
  }

  }

  updateForm() {
    this.updateEmployeeForm.setValue({
      empID: this.emp.empID,
      empName: this.emp.empName,
      organization: this.emp.organization,
      role: this.emp.role,
      project: this.emp.project,
      location: this.emp.location
    }

    )
  }

}
