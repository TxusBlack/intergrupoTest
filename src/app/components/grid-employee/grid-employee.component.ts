import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-employee',
  templateUrl: './grid-employee.component.html',
  styleUrls: ['./grid-employee.component.scss']
})
export class GridEmployeeComponent implements OnInit {

  headElements = ['name', 'age', 'username', 'hireDate'];
  @Input() elements: any = [];

  ngOnInit() {

  }

}
