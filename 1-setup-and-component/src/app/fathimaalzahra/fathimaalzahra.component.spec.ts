import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FathimaalzahraComponent } from './fathimaalzahra.component';

describe('FathimaalzahraComponent', () => {
  let component: FathimaalzahraComponent;
  let fixture: ComponentFixture<FathimaalzahraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FathimaalzahraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FathimaalzahraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
