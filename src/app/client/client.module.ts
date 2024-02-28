import { ClientRoutingModule } from './client-routing.module';
import { PaperComponent } from './../components/paper/paper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ClientAppointmentsComponent } from './pages/client-appointments/client-appointments.component';
import { ClientProfileComponent } from './pages/client-profile/client-profile.component';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    ClientAppointmentsComponent,
    ClientProfileComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, PaperComponent, SharedModule],
})
export class ClientModule {}
