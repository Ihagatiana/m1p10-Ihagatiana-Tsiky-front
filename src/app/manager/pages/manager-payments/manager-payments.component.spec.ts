import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPaymentsComponent } from './manager-payments.component';

describe('ManagerPaymentsComponent', () => {
  let component: ManagerPaymentsComponent;
  let fixture: ComponentFixture<ManagerPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerPaymentsComponent]
    });
    fixture = TestBed.createComponent(ManagerPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
