import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsInAssignmentComponent } from './problems-in-assignment.component';

describe('ProblemsInAssignmentComponent', () => {
  let component: ProblemsInAssignmentComponent;
  let fixture: ComponentFixture<ProblemsInAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsInAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsInAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
