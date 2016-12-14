import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notification',
  template: `
    <div class="alert" (noteChange)="success($event)">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
      <strong>Danger!</strong> 
    </div>
  `,
  styles: [`
    .alert {
        padding: 20px;
        background-color: #f44336;
        color: white;
    }
    
    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }
    
    .closebtn:hover {
        color: black;
    }
  `]
})
export class ToastService {
  title = "PRIDE Prep";
  @Input('msg') note: string;

  success(event) {
    console.log(event);
    this.note = event;
  }

  error(text: String) {
    //this.note = text;
  }
}
