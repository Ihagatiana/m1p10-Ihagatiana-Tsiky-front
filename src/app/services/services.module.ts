import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { LoaderComponent } from '../components/loader/loader.component';
import { PaperComponent } from '../components/paper/paper.component';
import { SectionComponent } from './../components/section/section.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ServiceService } from './service.service';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [ListComponent, FormComponent, DetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ServicesRoutingModule,
    LoaderComponent,
    SectionComponent,
    PaperComponent,
  ],
  providers: [ServiceService],
})
export class ServicesModule {}
