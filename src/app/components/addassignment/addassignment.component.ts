import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addassignment',
  templateUrl: './addassignment.component.html',
  styleUrls: ['./addassignment.component.css']
})
export class AddassignmentComponent implements OnInit {

  assignment = {
    name: "",
    isInfinite: true,
    starttime: "",
    startdate: "",
    endtime: "",
    enddate: "",
    problems: "", 
    hideTestInfo: false, 
    showTopStandings: false,
    group: "",
  };
  
  groups = [
    {
      id: 5,
      name: "5a smg",
    },
    {
      id: 6,
      name: "6a smg",
    },
    {
      id: 7,
      name: "7a smg",
    }
  ];
  
  constructor() { 
    // TODO: Load this.groups
  }

  ngOnInit() { 
  }
        
  
  add() {
    console.log(this.assignment);
  }

}
