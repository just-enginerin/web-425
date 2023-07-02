/*
  Title: base-layout.component.ts
  Author: Erin Brady
  Date: 2 July 2023
  Description: Base Layout Component Logic
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
  }

}
