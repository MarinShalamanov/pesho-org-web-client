import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';

@Component({
  selector: 'app-submit-code',
  templateUrl: './submit-code.component.html',
  styleUrls: ['./submit-code.component.css']
})
export class SubmitCodeComponent implements OnInit {
  public langs = [
    {value: 'cpp', viewValue: 'C++'},
    {value: 'node', viewValue: 'NodeJS'},
    {value: 'java', viewValue: 'Java'}
  ];
  public problems: any[];
  private contestId: string;
  private groupId: string;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private assignmentsService: AssignmentsService) { }
  
  ngOnInit() {
    this.contestId = this.route.snapshot.params.contestid;
    this.groupId = this.route.parent.snapshot.params.groupid;
    
    this.assignmentsService
      .getProblemsInAssignment(this.contestId)
      .subscribe(data => {
        this.problems = data as any[];
    });
  }

}
