/*
  Title: app.component.ts
  Author: Erin Brady
  Date: 3 June 2023
  Description: TS App component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isLoggedIn: boolean = true;
  assignment: string = 'Exercise 2.3: Data Binding';
}
