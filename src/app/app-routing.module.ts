import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'client',
    canMatch: [],
    loadChildren: () =>
      import('./client/client.module').then((module) => module.ClientModule),
  },
  {
    path: 'manager',
    canMatch: [],
    loadChildren: () =>
      import('./manager/manager.module').then((module) => module.ManagerModule),
  },
  {
    path: 'employee',
    canMatch: [],
    loadChildren: () =>
      import('./employee/employee.module').then(
        (module) => module.EmployeeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
