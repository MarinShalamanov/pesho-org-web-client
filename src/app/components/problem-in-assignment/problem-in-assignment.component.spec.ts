import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemInAssignmentComponent } from './problem-in-assignment.component';

describe('ProblemInAssignmentComponent', () => {
  let component: ProblemInAssignmentComponent;
  let fixture: ComponentFixture<ProblemInAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemInAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemInAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
