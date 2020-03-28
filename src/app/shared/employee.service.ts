import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  constructor(private httpClient : HttpClient) { }
  readonly url="http://localhost:58810/api/patients";
  postEmployee(formData : Employee)
  {
      return this.httpClient.post(this.url,formData);
  }
}
