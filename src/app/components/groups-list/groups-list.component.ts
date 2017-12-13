import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GroupsServiceService } from '../../services/groups-service.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

  constructor(private router: Router, 
              private groupsService: GroupsServiceService) { }

  public groups = [];
  
  ngOnInit() {
    this.groupsService.getGroups().subscribe(
      data => {
        this.groups = data as any[];
        console.log(this.groups);
      });
  }
  
  onGroupClicked(row) {
    this.router.navigate(['dashboard/group/' + row.Id]);
  }

}
