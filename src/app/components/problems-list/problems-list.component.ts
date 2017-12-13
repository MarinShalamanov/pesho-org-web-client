import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProblemsService } from '../../services/problems.service';

@Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.css']
})
export class ProblemsListComponent implements OnInit {
  constructor(private router: Router,
              private problemsService: ProblemsService) { }

  public problems: any[] = [];
  
  ngOnInit() {
    this.problemsService
      .getProblems()
      .subscribe(
        data => {
          this.problems = (data as any[])
            .map(this.problemToTableRow); 
        });
  }
    
  onRowClicked(row) {  
    this.router.navigate(['dashboard/problem/' + row.ID]);
  }
  
  private problemToTableRow(problem) {
    return {
      ID: problem.id,
      Name: problem.name,
      Tags: problem.tags.map(x => x.tag).join(', '),
      Author: problem.author,
      Username: problem.username
    }
  }
}

