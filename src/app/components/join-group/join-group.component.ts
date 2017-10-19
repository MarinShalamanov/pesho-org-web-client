import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {
  name:string;
  
  constructor() { }

  ngOnInit() {
  }
  
  joinGroup() {
    console.log("Joinig group " + this.name);
    
  }
}
