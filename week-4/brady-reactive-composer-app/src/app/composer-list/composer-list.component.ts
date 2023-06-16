/*
  Title: composer-list.component.ts
  Author: Erin Brady
  Date: 16 June 2023
  Description: Composer List Component TS
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>
  txtSearchControl = new FormControl('')

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers()

    // Anytime the text search control value is changed, call the filterControls function after 500 ms.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => val ? this.filterComposers(val) : null)
  }

  ngOnInit(): void {}

  filterComposers(name: string) {
    alert(name)
  }

}
