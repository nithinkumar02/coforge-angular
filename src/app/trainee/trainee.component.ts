import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainee',
  imports: [FormsModule,CommonModule],
  templateUrl: './trainee.component.html',
  styleUrl: './trainee.component.css'
})

export class TraineeComponent {

  powers = ['Smart Coder', 'Super Flexible',  
    'Logical Thinker', 'Excellent Analyst'];  

    //model invokes employee class constructors
    
    emp = new Employee(18, '', '', '');
  
  submitted = false;  
  onSubmit() { this.submitted = true; }  
  

}
