import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MatSnackBar } from '@angular/material';
import { ProblemsService } from '../../services/problems.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  displayedColumns = ['lang', 'time', 'space'];
  id = 0;
  
  public problem: any;
  public limits: any[] = [];
  
  constructor(private route: ActivatedRoute, 
              public snackBar: MatSnackBar,
              private problemsService: ProblemsService) { }

  
  
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    
    this.problemsService
      .getProblem(this.id)
      .subscribe(data => {
        this.problem = data;
        this.limits = [this.problem.languages['c++'], this.problem.languages['java']]
        console.log(this.problem);
      });
  }
  
  onRejudge() {
    // TODO ask for confirmation
    let snackBarRef = this.snackBar.open('Rejudge started', 'Undo', {
      duration: 3000
    });
    
    let undone = false;
    snackBarRef.onAction().subscribe(() => {
      undone = true;
    });
    
    snackBarRef.afterDismissed().subscribe(() => {
      if (!undone) {
        // TODO Trigger rejudge here
      }
    });
  }
  
  onAddToAssignment() {
    // TODO show dialog with recent assignments
    this.snackBar.open('Adding to assignment...', '', {
      duration: 2000
    });
  }
}

