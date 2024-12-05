import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string= ' ';
  password: string=' ';
  errormessage: string=' ';

  //static login Credentials

  validUsername = 'admin';
  validPassword= 'password';

  //DI - ROuter DI using Constructor

  constructor(private router: Router){}

  login(){
    if(this.username === this.validUsername && this.password === this.validPassword){
      this.router.navigate(['/']);
    }else{
      this.errormessage="INVALID CREDENTIALS, PLEASE TRY AGAIN !!...";
    }
  }

}
