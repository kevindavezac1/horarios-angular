import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosFlexComponent } from './horarios-flex.component';

describe('HorariosFlexComponent', () => {
  let component: HorariosFlexComponent;
  let fixture: ComponentFixture<HorariosFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorariosFlexComponent]
    });
    fixture = TestBed.createComponent(HorariosFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
