import { Component, OnInit } from '@angular/core';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.css']
})
export class AddSearchComponent implements OnInit {
  

  modalOption: NgbModalOptions = {};
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  
  openFormModal() {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    const modalRef = this.modalService.open(AddEmployeeComponent,this.modalOption);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }



}
