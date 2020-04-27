import { Component, OnInit } from '@angular/core';
import { InteractionsService } from 'src/app/services/interactions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    public i: InteractionsService,
    public router: Router
  ) { }

  public elementsCopy;

  public search(event: any): void {
    if (event) {
      this.i.elements = this.elementsCopy.filter((el: any) => el.name.toLowerCase().indexOf(event.toLowerCase()) > -1);
    } else {
      this.i.elements = this.elementsCopy;
    }
  }

  goToNewEmployee() {
    this.router.navigate(['/new-employees']);
  }

  ngOnInit(): void {
    this.elementsCopy = this.i.elements;
  }

}
