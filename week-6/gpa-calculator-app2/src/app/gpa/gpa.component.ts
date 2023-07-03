/*
  Title: gpa.component.ts
  Author: Erin Brady
  Date: 2 July 2023
  Description: GPA component logic
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})

export class GpaComponent implements OnInit {

  @Input()
  gpaTotal!: number;

  constructor() {
  }

  ngOnInit(): void {
  }
}
