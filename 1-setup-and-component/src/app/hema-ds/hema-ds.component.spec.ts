import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemaDSComponent } from './hema-ds.component';

describe('HemaDSComponent', () => {
  let component: HemaDSComponent;
  let fixture: ComponentFixture<HemaDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemaDSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemaDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
