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
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private employeeService: EmployeeService) { }

  ngOnInit() {
    this._employee = this.employee;
    console.log('in the delete component');

    console.log(this._employee.empID);
    this.employeeService.getEmployees().subscribe((data) => {
      this.employeeList = data;console.log(data)});
  }


  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  deleteFromList(id:String){

    for(var i=0;i<this.employeeList.length;i++){
        if(this.employeeList[i].empID === id){
          this.employeeList.splice(i);
        }
    }
  }
  onClickYes() {
    console.log(Number(this.employee.empID));
    this.employeeService.deleteEmployee(Number(this.employee.empID)).subscribe(data => this.deleteFromList(data.empID));
    this.closeModal();
  }


}


