import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAppointmentComponent } from './employee-appointment.component';

describe('EmployeeAppointmentComponent', () => {
  let component: EmployeeAppointmentComponent;
  let fixture: ComponentFixture<EmployeeAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAppointmentComponent]
    });
    fixture = TestBed.createComponent(EmployeeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
