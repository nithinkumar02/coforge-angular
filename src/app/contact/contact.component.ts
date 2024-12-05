import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pname: string= '';
 pemail: string=' ';
  pmessage: string=' ';
  submittedData: any= null;


  constructor(private router:Router){}

  onSubmit(){
    this.submittedData={
      name:this.pname,
     email:this.pemail,
      message:this.pmessage,
    };

    //AFTER 10 SECONDS , NAVIGATE TO DETAILS COMPONENT ALONG WITH 'SUBMITTEDDATA' OBJECT
    setTimeout(()=>{
      this.router.navigate(['/det'],{
        state: {data:this.submittedData},
      });

    },10000);   //10 seconds
  }

}
