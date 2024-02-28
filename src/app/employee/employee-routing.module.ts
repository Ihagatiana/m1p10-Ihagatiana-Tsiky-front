import { EmployeeAppointmentComponent } from './pages/employee-appointment/employee-appointment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmployeeLayoutComponent,
    children: [
      { path: 'appointments', component: EmployeeAppointmentComponent },
      { path: '', redirectTo: 'appointments', pathMatch: 'full' },
      { path: 'profil', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
