import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';

@Component({
  selector: 'app-problems-in-assignment',
  templateUrl: './problems-in-assignment.component.html',
  styleUrls: ['./problems-in-assignment.component.css']
})
export class ProblemsInAssignmentComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private assignmentsService: AssignmentsService) { }

  private contestId: string;
  private groupId: string;
  public problems: any[];
  public assignment: any;
  public points: any;
  
  ngOnInit() {
    this.contestId = this.route.snapshot.params.contestid;
    this.groupId = this.route.parent.snapshot.params.groupid;
    
    this.assignmentsService
      .getAssignment(this.contestId)
      .subscribe(data => {
        this.assignment = data as any;
    });
    
    
    this.assignmentsService
      .getCurrUserPoints(this.contestId)
      .subscribe(data => {
        this.points = data as any;
    });
    
    this.assignmentsService
      .getProblemsInAssignment(this.contestId)
      .subscribe(data => {
        this.problems = data as any[];
    });
  }
  
  public onProblemClicked(problem) {
    this.router.navigate([`groups/${this.groupId}/contest/${this.contestId}/problem/${problem.number}`]);
  } 

}
