import { Component, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeGridComponent implements OnInit {

  employeeList: Employee[] = [];
  modalOption: NgbModalOptions = {};
  empDataFromGrid: Employee;
  searchText;
  constructor(public activeModal: NgbActiveModal,
    private employeeService: EmployeeService,
    private modalService: NgbModal, private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.getAllEmployees();
      this.ref.detectChanges();
    }, 500);

  }
  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employeeList = data; console.log(data)
    });
  }

  openDeleteFormModal(employee: Employee) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    const modalRef = this.modalService.open(DeleteModalComponent, this.modalOption);
    modalRef.componentInstance.employee = employee;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
    console.log("******** " + employee.empID);
  }

  openUpdateFormModal(employee: Employee) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    const modalRef = this.modalService.open(UpdateModalComponent, this.modalOption);
    modalRef.componentInstance.employee = employee;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
    console.log("******** " + employee.empID);
  }


}
