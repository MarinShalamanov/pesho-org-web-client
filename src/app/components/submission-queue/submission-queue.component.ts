import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-submission-queue',
  templateUrl: './submission-queue.component.html',
  styleUrls: ['./submission-queue.component.css']
})
export class SubmissionQueueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onRowClicked(row) {
    this.router.navigate(['contest/submission/' + row.Id]);
  }
  
  inQueue = [
    {'Id': 1, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 2, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 3, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 4, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 5, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
  ];
  
  done = [
    {'Id': 6, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 7, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 8, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
  ];
}
