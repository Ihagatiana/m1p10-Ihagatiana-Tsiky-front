import { ProfileService } from './pages/profile/service/profile.service';
import { PaperComponent } from './../components/paper/paper.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmployeeAppointmentComponent } from './pages/employee-appointment/employee-appointment.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    ProfileComponent,
    EmployeeAppointmentComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    PaperComponent,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProfileService],
})
export class EmployeeModule {}
