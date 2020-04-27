import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { InteractionsService } from 'src/app/services/interactions.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    public i: InteractionsService
  ) { }

  public elementsCopy;

  public search(event: any): void {
    if (event) {
      this.i.elements = this.elementsCopy.filter((el: any) => el.name.toLowerCase().indexOf(event.toLowerCase()) > -1);
    } else {
      this.i.elements = this.elementsCopy;
    }
  }

  ngOnInit(): void {
    this.elementsCopy = this.i.elements;
  }

}
