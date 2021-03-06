import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionsService } from 'src/app/services/interactions/interactions.service';
import { Employee } from 'src/app/models/employee';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalDirective } from 'angular-bootstrap-md';

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

  public employeeForm: FormGroup;
  public canDeactivatePage: boolean;

  @ViewChild('basicModal', { static: true }) modal: ModalDirective;

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
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', [Validators.required, this.ageRangeValidator]),
      age: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]*$/)]),
      hireDate: new FormControl('', Validators.required),
      status: new FormControl(),
      area1: new FormControl('', Validators.required),
      area2: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      tipRate: new FormControl(),
    });
  }

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const age = Math.floor(((new Date()).getTime() - control.value) / (1000 * 60 * 60 * 24 * 365));
      return (age < 18 || age > 45) ? { birthday: control.value } : null;
    }
    return null;
  }

  onSubmit() {
    const result: Employee = Object.assign({}, this.employeeForm.value);
    console.log(result);
    this.i.elements.push(result);
    this.popPage(true);
  }

  btnSelectEdit(value: string) {
    let { area1, area2 } = this.employeeForm.value;
    this.employeeForm.valueChanges.subscribe(res => {
      area1 = res.area1;
      area2 = res.area2;
    });
    if (value === 'area1') {
      if (!area2) {
        this.employeeForm.patchValue({
          area1: !!area1 ? true : !area1
        });
        if (area1) {
          // Jobs for Services
          this.jobTitles = ['Manager', 'Host', 'Tuttofore', 'Waitress', 'Dinning room manager'];
          this.employeeForm.patchValue({
            jobTitle: null
          });
        } else {
          this.jobTitles = [];
          this.employeeForm.patchValue({
            jobTitle: null
          });
        }
      } else {
        this.employeeForm.patchValue({
          area1: !area1,
          area2: !area2,
        });
        // Jobs for Services
        this.jobTitles = ['Manager', 'Host', 'Tuttofore', 'Waitress', 'Dinning room manager'];
        this.employeeForm.patchValue({
          jobTitle: null
        });
      }
    }
    if (value === 'area2') {
      if (!area1) {
        this.employeeForm.patchValue({
          area2: !!area2 ? true : !area2
        });
        if (area2) {
          // Jobs for Kitchen
          this.jobTitles = ['Chef', 'Sous Chef', 'Dishwasher', 'Cook'];
          this.employeeForm.patchValue({
            jobTitle: null
          });
        } else {
          this.jobTitles = [];
          this.employeeForm.patchValue({
            jobTitle: null
          });
        }
      } else {
        this.employeeForm.patchValue({
          area1: !area1,
          area2: !area2,
        });
        // Jobs for Kitchen
        this.jobTitles = ['Chef', 'Sous Chef', 'Dishwasher', 'Cook'];
        this.employeeForm.patchValue({
          jobTitle: null
        });
      }
    }
  }

  setAge() {
    this.employeeForm.patchValue({
      age: Math.floor(((new Date()).getTime() - this.employeeForm.value.birthday) / (1000 * 60 * 60 * 24 * 365))
    });
  }

  popPage(value: boolean) {
    this.canDeactivatePage = value;
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.employeeForm.patchValue({
      status: false,
      area1: false,
      area2: false,
      tipRate: null
    });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    this.canDeactivatePage = this.canDeactivatePage ? this.canDeactivatePage : this.employeeForm.dirty;
    if (!this.canDeactivatePage) {
      this.modal.show();
      console.log('canDeactivate has fired in the component!', this.canDeactivatePage, this.employeeForm.dirty);
      return this.canDeactivatePage;
    } else {
      console.log('canDeactivate has fired in the component!', this.canDeactivatePage, this.employeeForm.dirty);
      return true;
    }
  }

}
