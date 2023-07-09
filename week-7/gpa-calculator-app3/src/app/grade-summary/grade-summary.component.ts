/*
  Title: grade-summary.component.ts
  Author: Erin Brady
  Date: 2 July 2023
  Description: Logic for grade summary component
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})

export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string

  constructor() {
    this.grade = ''
    this.course = ''
  }

  ngOnInit(): void {
  }
}
