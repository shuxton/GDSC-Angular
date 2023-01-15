import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivamrutgComponent } from './shivamrutg.component';

describe('ShivamrutgComponent', () => {
  let component: ShivamrutgComponent;
  let fixture: ComponentFixture<ShivamrutgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShivamrutgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShivamrutgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
