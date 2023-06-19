/*
  Title: composer-list.component.spec.ts
  Author: Erin Brady
  Date: 16 June 2023
  Description: Composer List Component Test Suite
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComposerListComponent } from './composer-list.component';

describe('ComposerListComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposerListComponent]
    });
    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});