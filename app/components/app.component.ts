import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: '../templates/app.component.html',
    stylesUrl: ['../css/app.component.css']
})
export class AppComponent {
  title = "PRIDE Data";
}
