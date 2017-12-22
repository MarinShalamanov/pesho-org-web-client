import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  
  public standings: any[];
  private contestId: string;
  private groupId: string;
  private problems: any[];
  
  constructor(private route: ActivatedRoute,
              private assignmentsService: AssignmentsService) { }

  
  ngOnInit() {
    this.contestId = this.route.snapshot.params.contestid;
    this.groupId = this.route.parent.snapshot.params.groupid;
    
    
    this.assignmentsService
      .getProblemsInAssignment(this.contestId)
      .subscribe(data => {
        this.problems = data as any[];
      
        this.assignmentsService
          .getStandings(this.contestId)
          .subscribe(data => {
            this.standings = [];
            for(let row of (data as any[])) {
              let newRow = {
                name: row.firstname + " " + row.lastname,
                user: row.username,
                points: row.points
              };
              
              for (let problem of this.problems) {
                newRow[problem.name] = row[problem.number];
              }
              
              this.standings.push(newRow);
            }
          });
      });
  }

}

