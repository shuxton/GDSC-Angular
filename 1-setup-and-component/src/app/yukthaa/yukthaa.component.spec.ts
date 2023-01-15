import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YukthaaComponent } from './yukthaa.component';

describe('YukthaaComponent', () => {
  let component: YukthaaComponent;
  let fixture: ComponentFixture<YukthaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YukthaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YukthaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
