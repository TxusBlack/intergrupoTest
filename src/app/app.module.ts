import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { EmployeesComponent } from './pages/employees/employees.component';
import { NewEmployeesComponent } from './pages/new-employees/new-employees.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './pages/view-employee/view-employee.component';
import { GridEmployeeComponent } from './components/grid-employee/grid-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateGuard } from './guard/can-deactivate-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NewEmployeesComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    GridEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    MatDatepickerModule,
    CanDeactivateGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
