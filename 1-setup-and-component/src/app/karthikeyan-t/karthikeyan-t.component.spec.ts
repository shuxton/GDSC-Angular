import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarthikeyanTComponent } from './karthikeyan-t.component';

describe('KarthikeyanTComponent', () => {
  let component: KarthikeyanTComponent;
  let fixture: ComponentFixture<KarthikeyanTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarthikeyanTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarthikeyanTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
