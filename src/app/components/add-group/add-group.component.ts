import { Component, OnInit } from '@angular/core';
import { GroupsServiceService } from '../../services/groups-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group = {
    groupname: "",
    description: ""
  };
  
  constructor(private router: Router,
               private groupsService: GroupsServiceService) { }

  ngOnInit() {
  }
  
  addGroup() {
    console.log(this.group);
    this.groupsService
      .createGroup(this.group)
      .subscribe(res => console.log(res));
    
    this.router.navigate([`dashboard/groups`]);
  }
}
