import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';

@Component({
  selector: 'app-problems-in-assignment',
  templateUrl: './problems-in-assignment.component.html',
  styleUrls: ['./problems-in-assignment.component.css']
})
export class ProblemsInAssignmentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private assignmentsService: AssignmentsService) { }

  private contestId: string;
  public problems: any[];
  
  ngOnInit() {
    this.contestId = this.route.snapshot.params.contestid;
    
    this.assignmentsService
      .getProblemsInAssignment(this.contestId)
      .subscribe(data => {
        this.problems = data as any[];
    });
  }

}
