import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  employeeList: Employee[] = [];
  updateEmployeeForm: FormGroup;
  @Input() employee: Employee;
  _employee: Employee
  @Output() passUpdateEntry = new EventEmitter();
  status='update';

  constructor(public activeModal: NgbActiveModal, private employeeService: EmployeeService,private ref: ChangeDetectorRef) {
    
  }


  ngOnInit() {

    this._employee = this.employee;
    console.log("This is employee  data from grid " + this._employee.empID);

    this.updateEmployeeForm = new FormGroup({
      empID: new FormControl(''),
      empName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),
      organization: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),
      role: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),
      project: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      location: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z ]*$/)])),
    });

    this.updateEmployeeForm.setValue({
      empID: this._employee.empID,
      empName: this._employee.empName,
      organization: this._employee.organization,
      role: this._employee.role,
      project: this._employee.project,
      location: this._employee.location
    })

  }

  onUpdateEmployee(emp: Employee) {
    console.log("Before update service call");
    this.employeeService.updateEmployee(emp).subscribe();
    this.passBack();
    this.closeModal();
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  passBack() {
    this.passUpdateEntry.emit(this.status);
    }




}

