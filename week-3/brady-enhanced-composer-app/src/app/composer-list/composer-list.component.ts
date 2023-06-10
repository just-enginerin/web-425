/*
  Title: composer-list.component.ts
  Author: Erin Brady
  Date: 3 June 2023
  Description: Composer List Component TS
*/

import { Component, OnInit } from '@angular/core';
import { Composer } from '../composer.class';
import { IComposer } from '../composer.interface';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>

  constructor() {
    this.composers = new Composer().getComposers()
  }

  ngOnInit(): void {}

}
