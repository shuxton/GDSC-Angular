import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinayaknmComponent } from './vinayaknm.component';

describe('VinayaknmComponent', () => {
  let component: VinayaknmComponent;
  let fixture: ComponentFixture<VinayaknmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinayaknmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinayaknmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
