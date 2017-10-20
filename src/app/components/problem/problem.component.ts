import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  displayedColumns = ['lang', 'time', 'space'];
  id = 0;
  
  limits = [
    {Language: "C++", Time: '400ms', Space: "64 MB"},
    {Language: "Java", Time: '400ms', Space: "64 MB"}
  ]
  
  constructor(private route: ActivatedRoute, 
               public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
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

