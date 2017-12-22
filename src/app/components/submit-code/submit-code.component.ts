import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-submit-code',
  templateUrl: './submit-code.component.html',
  styleUrls: ['./submit-code.component.css']
})
export class SubmitCodeComponent implements OnInit {
  public langs = [
    {value: 'c++', viewValue: 'C++'},
    {value: 'java', viewValue: 'Java'}
  ];
  public problems: any[];
  private contestId: string;
  private groupId: string;
  public file: File;
  public metadata: any = {
    problemId: 0,
    assignmentId: 0,
    language: ''
  };
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private assignmentsService: AssignmentsService,
              private submissionsService: SubmissionsService) { }
  
  ngOnInit() {
    this.contestId = this.route.snapshot.params.contestid;
    this.groupId = this.route.parent.snapshot.params.groupid;
    
    this.assignmentsService
      .getProblemsInAssignment(this.contestId)
      .subscribe(data => {
        this.problems = data as any[];
    });
  }
    
  public fileChange(event) {
    let fileList: FileList = event.target.files;
    
    if (fileList.length > 0) {
      this.file = fileList[0];
    } else {
      this.file = null;
    }
  }
  
  public onSubmit() {
    
    this.metadata.assignmentId = Number(this.contestId);
    console.log(this.metadata);
    this.submissionsService
      .submitCode(this.file, this.metadata);
  }
}
