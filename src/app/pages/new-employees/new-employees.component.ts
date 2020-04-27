import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionsService } from 'src/app/services/interactions.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  styleUrls: ['./new-employees.component.scss']
})
export class NewEmployeesComponent implements OnInit {

  public username: string;
  public employee: Employee = {
    birthday: ''
  };

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
    public i: InteractionsService
  ) { }

  save() {
    // make validation before save
    this.i.elements = this.i.elements.filter(el => el.username !== this.username);
    this.i.elements.push(this.employee);
    console.log('e', this.i.elements, this.employee);
    this.popPage();
  }

  btnSelectEdit(value: string) {
    if (value === 'employee.area1') {
      if (!this.employee.area2) {
        this.employee.area1 = !this.employee.area1;
      } else {
        this.employee.area1 = !this.employee.area1;
        this.employee.area2 = !this.employee.area2;
      }
    }
    if (value === 'employee.area2') {
      if (!this.employee.area1) {
        this.employee.area2 = !this.employee.area2;
      } else {
        this.employee.area1 = !this.employee.area1;
        this.employee.area2 = !this.employee.area2;
      }
    }
  }

  popPage() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
