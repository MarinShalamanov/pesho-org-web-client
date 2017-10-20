import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
  
@Component({
  selector: 'app- groups-details',
  templateUrl: './groups-details.component.html',
  styleUrls: ['./groups-details.component.css']
})
export class GroupsDetailsComponent implements OnInit {
  groupName = "ПЧМГ"
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onAssignmentClicked(row) {
    this.router.navigate(['contest/problems']);
  }
  
  lastSubmission = [
    {'Id': 6, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 7, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
    {'Id': 8, 'User': 'rara', 'Name': 'Raia Davcheva', Time: '	2016-09-27 04:49:48 +0000 UTC', Problem: "Hello, World!", Lanuguage: "c++", Verdict: "Compilation Failed"},
  ];
  
  assignments = [
    {'Id': 1, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 2, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 3, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 4, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 5, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 6, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
  ];
  
  users = [
    {'Id': 1, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 2, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 3, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 4, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 5, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 6, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 3, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 4, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 5, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 6, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 3, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 4, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 5, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 6, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
  ];

}
