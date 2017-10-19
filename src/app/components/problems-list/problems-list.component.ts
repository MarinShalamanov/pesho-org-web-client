import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.css']
})
export class ProblemsListComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
    
  onRowClicked(row) {  
    this.router.navigate(['dashboard/problem/' + row.Id]);
  }
  
  data = [
    {'Id': 1, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 2, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 3, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 4, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 5, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
    {'Id': 6, 'Probem name': 'Hydrogen', 'Version': '1.0079', Tags: 'H'},
  ];
}

