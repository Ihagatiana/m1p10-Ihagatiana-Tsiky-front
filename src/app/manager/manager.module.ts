import { StatisticsService } from './pages/statistics/service/statistics.service';
import { HttpClientModule } from '@angular/common/http';
import { PaperComponent } from './../components/paper/paper.component';
import { SharedModule } from './../shared/shared.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { EmployesComponent } from './pages/employes/employes.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

@NgModule({
  declarations: [
    ManagerLayoutComponent,
    EmployesComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    PaperComponent,
    HttpClientModule,
  ],
  providers: [StatisticsService],
})
export class ManagerModule {}
