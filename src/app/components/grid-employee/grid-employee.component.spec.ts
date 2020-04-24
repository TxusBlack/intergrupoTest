import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEmployeeComponent } from './grid-employee.component';

describe('GridEmployeeComponent', () => {
  let component: GridEmployeeComponent;
  let fixture: ComponentFixture<GridEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
