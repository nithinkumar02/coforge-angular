import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId:number=101;
  employeeName:string="TEJJ";
  employeeAge : number=23;

  title="Employee Details - DATA BINDING USING VARIOUS DIRECTIVES"

  isManager: boolean=true;

  //Array
  skills:string[] =['javascript','angular','typescript'];

  //ENum
  position: PositionType= PositionType.SeniorDeveloper;

  //object

  address:{street:string,city:string,postalcode:number}={
    street: '123 Main St',
    city: 'New York',
    postalcode:10001
  };

  //Any Data type(can be of any type)
  extraInfo: any = 'Additional employee info';

  //Event Binding - handling method
  message: string= '';
  //Two way data bidning
  employeePosition: string ='Software Engineer';

  //Event Binding Method

  hello():void{
    this.message="HEllo From Event Binding in Angular by - "+this.employeeName;
  }
  clear():void{
    this.message=' ';
  }
  toggleManagerStatus():void{
    this.isManager = !this.isManager;
  }
  //property Binding - One way Binding

  username:string='James Gosling';
  info:string="Property Binding - One Way";

  updateUserName(){
    this.username='Jhon Doe';
  }

  convertToDate(){
    const date=new Date();
    return date.toLocaleDateString();
  }

  add():number{
    return 10+200;
  }
}

//Enum for Position Type

enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead
}