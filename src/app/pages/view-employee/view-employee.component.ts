import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { InteractionsService } from 'src/app/services/interactions.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  public username: string;
  public employee: Employee;

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

  popPage() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.queryParamMap.get('username');
    if (this.username) {
      this.employee = this.i.elements.find(el => el.username === this.username);
      console.log('this.employee', this.employee);
    }
  }

}
