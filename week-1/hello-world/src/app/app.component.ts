import { Component } from '@angular/core';

/**
 * Main file for the app component where we write any kind of JavaScript (TypeScript) logic for our application.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myWorld = 'You are now in Erin\'s world.'
}
