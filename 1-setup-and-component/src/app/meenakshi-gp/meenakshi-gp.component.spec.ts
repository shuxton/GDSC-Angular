import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeenakshiGPComponent } from './meenakshi-gp.component';

describe('MeenakshiGPComponent', () => {
  let component: MeenakshiGPComponent;
  let fixture: ComponentFixture<MeenakshiGPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeenakshiGPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeenakshiGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
