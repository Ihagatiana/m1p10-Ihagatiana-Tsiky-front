import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PaperComponent } from '../components/paper/paper.component';
import { SectionComponent } from '../components/section/section.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    PaperComponent,
    SectionComponent,
  ],
  declarations: [
    NavBarComponent,
    PublicLayoutComponent,
    HomeComponent,
    ServicesComponent,
    DropdownComponent,
  ],
})
export class SharedModule {}
