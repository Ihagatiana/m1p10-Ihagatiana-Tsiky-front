import { ManagerServicesComponent } from './pages/manager-services/manager-services.component';
import { EmployesComponent } from './pages/employes/employes.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerLayoutComponent,
    children: [
      { path: 'employes', component: EmployesComponent },
      { path: 'services', component: ManagerServicesComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: '', redirectTo: 'employes', pathMatch: 'full' },
      // { path: 'profil', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
