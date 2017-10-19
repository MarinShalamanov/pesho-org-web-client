import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group = {
    name: "",
    description: ""
  };
  
  constructor() { }

  ngOnInit() {
  }
  
  addGroup() {
    console.log(this.group);
  }
}
