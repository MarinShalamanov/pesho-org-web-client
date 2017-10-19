import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  data = [
    {'Id': 1, 'Group name': 'Hydrogen', 'Description': 'Lorem ipsum dollor sit amet', 'Owner': 'marin'},
    {'Id': 2, 'Group name': 'Hydrogen', 'Description': 'Lorem ipsum dollor sit amet', 'Owner': 'marin'},
    {'Id': 3, 'Group name': 'Hydrogen', 'Description': 'Lorem ipsum dollor sit amet', 'Owner': 'marin'},
    {'Id': 4, 'Group name': 'Hydrogen', 'Description': 'Lorem ipsum dollor sit amet', 'Owner': 'marin'},
    {'Id': 5, 'Group name': 'Hydrogen', 'Description': 'Lorem ipsum dollor sit amet', 'Owner': 'marin'},
    {'Id': 6, 'Group name': 'Hydrogen', 'Description': 'Lorem ipsum dollor sit amet', 'Owner': 'marin'},
  ];

}
