import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent implements OnInit {

  employeeList: Employee[] = [];

  disabled = false;
  constructor(public activeModal: NgbActiveModal, private employeeService: EmployeeService, private modalService: NgbModal) { }

  ngOnInit() {
  
    this.employeeService.getEmployees().subscribe((data) => {
                                        this.employeeList = data;console.log(data)});
  }



  openUpdateFormModal(employee: Employee) {
    console.log(employee);
      const modalRef = this.modalService.open(UpdateEmployeeComponent);
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
      console.log("******** " + employee.empID);
     // this.renderOnForm(employee);
    } 

  

  openDeleteFormModal(employee:Employee){

    const modalRef = this.modalService.open(DeleteModalComponent);
      modalRef.componentInstance.employee = employee;
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
      console.log("******** " + employee.empID);
  }
  
  // renderOnForm(_employee:Employee){
  //   console.log("######### Data "+_employee.empID);
  //   this.updateEmployeeForm.setValue({
  //     empID: _employee.empID,
  //     empName: _employee.empName,
  //     organization:_employee.organization,
  //     role: _employee.role,
  //     project: _employee.project,
  //     location: _employee.location
  //   })
  //   this.disabled = true;
  // }

  isDisabled(){
    this.disabled = true;
  }







}
