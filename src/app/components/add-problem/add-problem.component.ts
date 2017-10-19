import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {
  
  problem = {
    name: "Test problem",
    description: "Bla bla",
    version: "vers",
    visibility: "public",
    tags: "bfs, graph", 
    points: 100,
    tests: [{input: "1 1\n", output: "2\n"}, 
           {input: "1 5\n", output: "6\n"}],
    languages: {
      cpp: {
        allowed: true,
        timelimit: 100,
        memorylimit: 64
      },
      java: {
        allowed: false,
        timelimit: 100,
        memorylimit: 128
      }
    }
  };
  
  constructor() { }

  ngOnInit() {
  }
  
  addTestCase() {
    this.problem.tests.push({input:"", output: ""});
  }
  
  removeTestCase(index) {
    this.problem.tests.splice(index, 1);  
  }
  
  addProblem() {
    console.log("add problem pressed");
    console.log(this.problem);
  }
}
