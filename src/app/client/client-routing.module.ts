import { ClientPaymentsComponent } from './pages/client-payments/client-payments.component';
import { ClientAppointmentsComponent } from './pages/client-appointments/client-appointments.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './pages/client-profile/client-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: 'appointments', component: ClientAppointmentsComponent },
      { path: 'profil', component: ClientProfileComponent },
      { path: 'payments', component: ClientPaymentsComponent },
      { path: '', redirectTo: 'appointments', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
