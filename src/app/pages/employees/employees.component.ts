import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public elements = [
    { name: 'Diego', age: 21, username: 'txusblack', hireDate: new Date() },
    { name: 'Ingrid', age: 22, username: 'ingridgil', hireDate: new Date() },
    { name: 'Lorena', age: 23, username: 'lorenagil', hireDate: new Date() },
    { name: 'Miguel', age: 24, username: 'miguelmoreno', hireDate: new Date() },
    { name: 'José', age: 25, username: 'josemoreno', hireDate: new Date() },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
