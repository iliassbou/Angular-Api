import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee :Employee =new Employee;
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form !=null)
    form.resetForm();
    this.service.formData={
      EmployeeId:null,
      Name:'',
      Position:'',
      Age:0,
      salary:0
  
    }

  }
    onSubmit(form?:NgForm){
      this.service.postEmployee(form.value).subscribe((response:Employee)=>{
    console.log(this.employee);
  });

 }
 }

