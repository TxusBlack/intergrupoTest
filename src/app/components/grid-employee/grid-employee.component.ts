import { Component, OnInit, Input } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-grid-employee',
  templateUrl: './grid-employee.component.html',
  styleUrls: ['./grid-employee.component.scss']
})
export class GridEmployeeComponent implements OnInit {

  headElements = ['name', 'age', 'username', 'hireDate'];
  @Input() elements: any = [];

  constructor(
    public router: Router
  ) {}

  remove(id: any) {
    this.elements.splice(id, 1);
  }

  goToPage(obj: Employee, url: string) {
    const queryParams: Params = { username: obj.username };
    this.router.navigate([url], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  ngOnInit() {

  }

}
