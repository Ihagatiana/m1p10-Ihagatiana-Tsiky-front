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
import { ManagerServicesComponent } from './pages/manager-services/manager-services.component';
import { ManagerPaymentsComponent } from './pages/manager-payments/manager-payments.component';

@NgModule({
  declarations: [
    ManagerLayoutComponent,
    EmployesComponent,
    StatisticsComponent,
    ManagerServicesComponent,
    ManagerPaymentsComponent,
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
