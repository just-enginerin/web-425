import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer | null = null;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId') ?? '0', 10);

    if (!isNaN(this.composerId)) {
      this.composer = new Composer().getComposer(this.composerId) || {} as IComposer;
    }
  }

  ngOnInit(): void {}
}
