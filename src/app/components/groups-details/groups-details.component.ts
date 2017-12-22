import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GroupsServiceService } from '../../services/groups-service.service';
import { UsersService } from '../../services/users.service';
import { AssignmentsService } from '../../services/assignments.service';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app- groups-details',
  templateUrl: './groups-details.component.html',
  styleUrls: ['./groups-details.component.css']
})
export class GroupsDetailsComponent implements OnInit {
  private contestId: string;
  private groupId: string;
  public group: any;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private groupsService: GroupsServiceService,
              private usersService: UsersService,
              private assignmentsService: AssignmentsService,
              private submissionsService: SubmissionsService) { }

  public lastSubmission: any[] = [];
  public assignments: any[] = [];
  public users: any[] = [];
  
  ngOnInit() {
    this.groupId = this.route.snapshot.params.groupid;
    this.groupsService
      .getGroup(this.groupId)
      .subscribe(data => {
        this.group = data;
      });
    
    this.usersService
      .getUsersInGroup(this.groupId)
      .subscribe(data => {
        this.users = data as any[];
      });
    
    this.assignmentsService
      .getAssignmentsInGroup(this.groupId)
      .subscribe(data => {
        this.assignments = data as any[];
      }); 
    
    this.submissionsService
      .getSubmissionsInGroup(this.groupId)
      .subscribe(data => {
        this.lastSubmission = data as any[];
      }); 
  }
  
  onAssignmentClicked(row) {
    this.router.navigate([`groups/${this.groupId}/contest/${row.id}/problems`]);
  }
  
  onRowClicked(row) {
    console.log("click");
  }
}
