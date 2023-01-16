import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SajidHusainPatilComponent } from './sajid-husain-patil.component';

describe('SajidHusainPatilComponent', () => {
  let component: SajidHusainPatilComponent;
  let fixture: ComponentFixture<SajidHusainPatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SajidHusainPatilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SajidHusainPatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
