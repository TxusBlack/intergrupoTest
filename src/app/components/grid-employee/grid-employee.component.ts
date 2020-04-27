import { Component, OnInit, Input } from '@angular/core';
import { Router, Params } from '@angular/router';

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

  openEmployee(obj) {
    const queryParams: Params = { username: obj.username };
    this.router.navigate(['/view-employees'], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  ngOnInit() {

  }

}
