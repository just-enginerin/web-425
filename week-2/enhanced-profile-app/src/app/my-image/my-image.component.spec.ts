/*
  Title: my-image.component.spec.ts
  Author: Erin Brady
  Date: 3 June 2023
  Description: Test suite for my-image component
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyImageComponent]
    });

    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
