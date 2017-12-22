import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-submission-details',
  templateUrl: './submission-details.component.html',
  styleUrls: ['./submission-details.component.css']
})
export class SubmissionDetailsComponent implements OnInit {
  private contestId: string;
  private groupId: string;
  private submissionId: string;
  public submission: any;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private assignmentsService: AssignmentsService,
              private submissionsService: SubmissionsService) { }
  
  ngOnInit() {
    this.contestId = this.route.snapshot.params.contestid;
    this.groupId = this.route.parent.snapshot.params.groupid;
    this.submissionId = this.route.snapshot.params.id;
    
    this.submissionsService
      .getSubmission(this.submissionId)
      .subscribe(data => {
        this.submission = data as any;
        console.log(this.submission);
      });
  }
  
}