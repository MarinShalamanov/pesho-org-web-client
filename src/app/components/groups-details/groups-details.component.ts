import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GroupsServiceService } from '../../services/groups-service.service';
import { UsersService } from '../../services/users.service';
import { AssignmentsService } from '../../services/assignments.service';

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
              private assignmentsService: AssignmentsService) { }

  
  public lastSubmission = [
    {'Id': 6, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 7, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 8, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
  ];
  
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
  }
  
  onAssignmentClicked(row) {
    this.router.navigate([`groups/${this.groupId}/contest/${row.Id}/problems`]);
  }
  
  onRowClicked(row) {
    console.log("click");
  }
}
