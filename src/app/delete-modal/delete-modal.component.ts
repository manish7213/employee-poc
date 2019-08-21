import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() employee: Employee;
  _employee: Employee
  employeeList:Employee[]=[];
  @Output() passDeleteEntry: EventEmitter<any> = new EventEmitter();
  status = 'delete'
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private employeeService: EmployeeService) { }

  ngOnInit() {
    this._employee = this.employee;
   
  }


  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onClickYes() {
    console.log(Number(this.employee.empID));
    this.employeeService.deleteEmployee(Number(this.employee.empID)).subscribe(data => console.log(data.empID));
    this.passBack();
    this.closeModal();
  }

  passBack() {
    this.passDeleteEntry.emit(this.status);
    }


}


