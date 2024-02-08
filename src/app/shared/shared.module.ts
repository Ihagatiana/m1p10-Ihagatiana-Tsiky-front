import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PaperComponent } from '../components/paper/paper.component';
import { SectionComponent } from '../components/section/section.component';
import { CardComponent } from '../components/card/card.component';
import { LoaderComponent } from '../components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    PaperComponent,
    SectionComponent,
    CardComponent,
    LoaderComponent,
  ],
  declarations: [
    NavBarComponent,
    PublicLayoutComponent,
    HomeComponent,
    DropdownComponent,
  ],
})
export class SharedModule {}
