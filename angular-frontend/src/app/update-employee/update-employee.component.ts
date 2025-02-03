import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number = 0;

  employee: Employee = new Employee();

  constructor(private employeeservice: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("ID ", this.id);

    this.employeeservice.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      console.log("Employee data:", this.employee);  // Log here to check data is fetched
    }, error => {
      console.log(error);
    });
  }



  updateEmployee() {
    this.employeeservice.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.goToEmloyeeList();

    }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }

  goToEmloyeeList() {
    this.router.navigate(['/employees']);
  }

}
// 2.36 remaining 
