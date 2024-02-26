import { EmployesComponent } from './pages/employes/employes.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManagerLayoutComponent,
    children: [
      { path: 'employes', component: EmployesComponent },
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
