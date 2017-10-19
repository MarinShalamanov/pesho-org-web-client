import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {
  tests = [{input: "1 1\n", output: "2\n"}, 
           {input: "1 5\n", output: "6\n"}];
  
  constructor() { }

  ngOnInit() {
  }
  
  addTestCase() {
    this.tests.push({input:"", output: ""});
  }
  
  removeTestCase(index) {
    this.tests.splice(index, 1);  
  }
}
