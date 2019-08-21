import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  employeeForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private employeeService: EmployeeService) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      empName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),
      organization: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),
      role: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),
      project: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      location: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),

    });

  }

  onAddEmployee(employee: Employee) {

    console.log("Employee is " + employee);
    this.employeeService.addEmployee(employee)
      .subscribe((data) => console.log("added ", data));

    this.closeModal();
  }


}
