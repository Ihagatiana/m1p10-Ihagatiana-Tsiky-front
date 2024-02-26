import { PaperComponent } from './../components/paper/paper.component';
import { SharedModule } from './../shared/shared.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { EmployesComponent } from './pages/employes/employes.component';

@NgModule({
  declarations: [ManagerLayoutComponent, EmployesComponent],
  imports: [CommonModule, ManagerRoutingModule, SharedModule, PaperComponent],
})
export class ManagerModule {}
