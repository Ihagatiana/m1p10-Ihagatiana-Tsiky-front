import { LoginService } from './pages/login/service/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './../components/pagination/pagination.component';
import { DragNDropComponent } from './../components/drag-n-drop/drag-n-drop.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { ServicesComponent } from './pages/services/services.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from '../components/card/card.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { PaperComponent } from '../components/paper/paper.component';
import { SectionComponent } from '../components/section/section.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from '../components/modal/modal.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './pages/sign-up/service/sign-up.service';

@NgModule({
  declarations: [
    ServicesComponent,
    PublicLayoutComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,

    HttpClientModule,
    SharedModule,
    PaperComponent,
    SectionComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    DragNDropComponent,
    PaginationComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService, SignUpService],
})
export class PublicModule {}
