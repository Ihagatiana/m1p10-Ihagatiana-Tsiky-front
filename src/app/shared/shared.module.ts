import { AuthServiceService } from './services/auth-service.service';
import { PaginationComponent } from './../components/pagination/pagination.component';
import { DragNDropComponent } from './../components/drag-n-drop/drag-n-drop.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PaperComponent } from '../components/paper/paper.component';
import { SectionComponent } from '../components/section/section.component';
import { CardComponent } from '../components/card/card.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { ServicesListComponent } from './components/services/services-list/services-list.component';
import { ServicesFormComponent } from './components/services/services-form/services-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './components/services.service';
import { ModalComponent } from '../components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentListComponent } from './components/appointment/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './components/appointment/appointment-form/appointment-form.component';

@NgModule({
  imports: [
    CommonModule,
    PaperComponent,
    SectionComponent,
    CardComponent,
    LoaderComponent,
    HttpClientModule,
    RouterModule,
    ModalComponent,
    ReactiveFormsModule,
    FormsModule,
    DragNDropComponent,
    PaginationComponent,
  ],
  declarations: [
    NavBarComponent,
    DropdownComponent,
    ServicesListComponent,
    ServicesFormComponent,
    AppointmentListComponent,
    AppointmentFormComponent,
  ],
  exports: [
    NavBarComponent,
    DropdownComponent,
    ServicesListComponent,
    ServicesFormComponent,
    AppointmentListComponent,
  ],
  providers: [ServicesService, AuthServiceService],
})
export class SharedModule {}
