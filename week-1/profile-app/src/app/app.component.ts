/*
  Title: app.component.ts
  Author: Erin Brady
  Date: 28 May 2023
  Description: TS App component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  assignment = 'Assignment 1.5: Components';
}
