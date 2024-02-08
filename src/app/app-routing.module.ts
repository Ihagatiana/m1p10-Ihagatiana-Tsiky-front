import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    loadChildren: () =>
      import('./public/public.module').then((module) => module.PublicModule),
  },
  {
    path: 'client',
    canActivate: [],
    loadChildren: () =>
      import('./client/client.module').then((module) => module.ClientModule),
  },
  {
    path: 'manager',
    canActivate: [],
    loadChildren: () =>
      import('./manager/manager.module').then((module) => module.ManagerModule),
  },
  {
    path: 'employee',
    canActivate: [],
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
