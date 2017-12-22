import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  private contestId: string;
  private groupId: string;
  
  public submissions: any[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private submissionsService: SubmissionsService) { }

  
  ngOnInit() {
    this.contestId = this.route.snapshot.params.contestid;
    this.groupId = this.route.parent.snapshot.params.groupid;
    
    this.submissionsService
      .getMySubmissionsInAssignment(this.contestId)
      .subscribe(
        data => {
          this.submissions = []; 
          for (let sub of (data as any[])) {
            this.submissions.push({
              id: sub.id,
              problem: sub.name,
              points: sub.points,
              time: sub.time,
              firstname: sub.firstname,
              lastname: sub.lastname,
              verdict: sub.verdict
            });
          }
        });
  }
  
  onRowClicked(row) {
    this.router.navigate([`groups/${this.groupId}/contest/${this.contestId}/submission/${row.id}`]);
  }
}

