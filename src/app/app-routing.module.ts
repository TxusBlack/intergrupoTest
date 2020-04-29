import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './pages/employees/employees.component';
import { NewEmployeesComponent } from './pages/new-employees/new-employees.component';
import { ViewEmployeeComponent } from './pages/view-employee/view-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { CanDeactivateGuard } from './guard/can-deactivate-guard.guard';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'new-employees', component: NewEmployeesComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'view-employees', component: ViewEmployeeComponent },
  { path: 'edit-employees', component: EditEmployeeComponent, canDeactivate: [CanDeactivateGuard] },
  { path: '',   redirectTo: '/employees', pathMatch: 'full' },
  { path: '**', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
