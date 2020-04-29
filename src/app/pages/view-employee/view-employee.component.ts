import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { InteractionsService } from 'src/app/services/interactions/interactions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  public username: string;
  public employee: Employee;

  public jobTitles: Array<string> = [];
  public model: any = {
    onColor: 'primary',
    offColor: 'secondary',
    onText: 'On',
    offText: 'Off',
    disabled: false,
    size: ''
  };

  public employeeForm: FormGroup;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public i: InteractionsService,
    public api: ApiService
  ) {
    this.employeeForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl({ value: '', disabled: true }),
      birthday: new FormControl({ value: '', disabled: true }),
      age: new FormControl({ value: '', disabled: true }),
      country: new FormControl({ value: '', disabled: true }),
      username: new FormControl({ value: '', disabled: true }),
      hireDate: new FormControl({ value: '', disabled: true }),
      status: new FormControl({ value: '', disabled: true }),
      area1: new FormControl({ value: '', disabled: true }),
      area2: new FormControl({ value: '', disabled: true }),
      jobTitle: new FormControl({ value: '', disabled: true }),
      tipRate: new FormControl({ value: '', disabled: true }),
    });
  }

  popPage() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.queryParamMap.get('username');
    if (this.username) {
      this.employee = this.i.elements.find(el => el.username === this.username);
      this.employeeForm.patchValue({
        ...this.employee
      });
      this.jobTitles.push(this.employeeForm.value.jobTite);
    }
  }

}
