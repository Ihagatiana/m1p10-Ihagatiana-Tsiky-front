import { LoaderComponent } from './../components/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientProfilService } from './pages/client-profile/service/client-profil.service';
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
  imports: [
    CommonModule,
    ClientRoutingModule,
    PaperComponent,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  providers: [ClientProfilService],
})
export class ClientModule {}
