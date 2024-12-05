import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  /*Component Communication: 
Used @Input to receive data from the parent and 
@Output to emit data to the parent.*/


  @Input() user: any = null;


}
