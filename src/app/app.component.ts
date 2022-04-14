import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Carrera', url: 'carrera', icon: 'run' },
    { title: 'Logros', url: 'logros', icon: 'goals' },
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router:Router) {}

  


}
