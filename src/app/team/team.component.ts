import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamService } from '../team.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  users:any;
  msg:string='';

  constructor(private myteamservice:TeamService){
    //alert ("constructor");
  }
  ngOnInit(){
    this.msg=this.myteamservice.helloService();
   this.myteamservice.getUsers().subscribe(response => {
    this.users=response;
   });
  }
}
