import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GroupsServiceService } from '../../services/groups-service.service';

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  styleUrls: ['./all-groups.component.css']
})
export class AllGroupsComponent implements OnInit {

  constructor(private router: Router,
              private groupsService: GroupsServiceService) { }

  public groups = [];
  
  ngOnInit() {
    this.groupsService.getGroups().subscribe(
      data => {
        this.groups = data as any[];
      });
  }
  
  onGroupClick(id) {
    this.router.navigate(['contest/group/' + id]);
  }
}
