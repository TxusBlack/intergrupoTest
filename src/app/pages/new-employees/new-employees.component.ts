import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionsService } from 'src/app/services/interactions/interactions.service';
import { Employee } from 'src/app/models/employee';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  styleUrls: ['./new-employees.component.scss']
})
export class NewEmployeesComponent implements OnInit {

  public username: string;
  public employee: Employee = {
    birthday: '',
    country: null,
    jobTitle: null
  };
  public jobTitles: Array<string> = [];

  public model: any = {
    onColor: 'primary',
    offColor: 'secondary',
    onText: 'On',
    offText: 'Off',
    disabled: false,
    size: ''
  };

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public i: InteractionsService,
    public api: ApiService
  ) { }

  save() {
    // make validation before save
    this.i.elements = this.i.elements.filter(el => el.username !== this.username);
    this.i.elements.push(this.employee);
    this.popPage();
  }

  btnSelectEdit(value: string) {
    if (value === 'employee.area1') {
      if (!this.employee.area2) {
        this.employee.area1 = !this.employee.area1;
        if (this.employee.area1) {
          // Jobs for Services
          this.jobTitles = ['Manager', 'Host', 'Tuttofore', 'Waitress', 'Dinning room manager'];
        } else {
          this.jobTitles = [];
          this.employee.jobTitle = null;
        }
      } else {
        this.employee.area1 = !this.employee.area1;
        this.employee.area2 = !this.employee.area2;
        // Jobs for Services
        this.jobTitles = ['Manager', 'Host', 'Tuttofore', 'Waitress', 'Dinning room manager'];
      }
    }
    if (value === 'employee.area2') {
      if (!this.employee.area1) {
        this.employee.area2 = !this.employee.area2;
        if (this.employee.area2) {
          // Jobs for Kitchen
          this.jobTitles = ['Chef', 'Sous Chef', 'Dishwasher', 'Cook'];
        } else {
          this.jobTitles = [];
          this.employee.jobTitle = null;
        }
      } else {
        this.employee.area1 = !this.employee.area1;
        this.employee.area2 = !this.employee.area2;
        // Jobs for Kitchen
        this.jobTitles = ['Chef', 'Sous Chef', 'Dishwasher', 'Cook'];
      }
    }
  }

  popPage() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
