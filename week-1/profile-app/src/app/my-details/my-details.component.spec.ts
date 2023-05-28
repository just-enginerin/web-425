/*
  Title: my-details.component.spec.ts
  Author: Erin Brady
  Date: 28 May 2023
  Description: Test suite for my-details component
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsComponent } from './my-details.component';

describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDetailsComponent]
    });
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
