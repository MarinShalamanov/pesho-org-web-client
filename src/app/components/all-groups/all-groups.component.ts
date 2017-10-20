import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  styleUrls: ['./all-groups.component.css']
})
export class AllGroupsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onGroupClick(id) {
    this.router.navigate(['contest/group/' + id]);
  }
}
