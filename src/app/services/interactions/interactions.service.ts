import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  public elements: Array<Employee> = [
    { name: 'Diego Moreno', age: 21, username: 'txusblack', hireDate: new Date(1587974892000) },
    { name: 'Hernán Pérez', age: 22, username: 'juanperez', hireDate: new Date(1551341292000) },
    { name: 'Lorena Gil', age: 23, username: 'lorenagil', hireDate: new Date(1571558892000) },
    { name: 'Farleyd Jimenez', age: 23, username: 'fjimenez', hireDate: new Date(1557648492000) },
    { name: 'Miguel Amaya', age: 24, username: 'miguelamaya', hireDate: new Date(1575014892000) },
    { name: 'José Daniel', age: 25, username: 'josedaniel', hireDate: new Date(1573459692000) },
  ];

  constructor() { }

}
