/*
  Title: base-layout.component.ts
  Author: Erin Brady
  Date: 2 July 2023
  Description: Base Layout Component Logic
*/

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms'
  }

  signOut() {
    this.cookieService.deleteAll()
    this.router.navigate(['/session/sign-in'])
  }

}
