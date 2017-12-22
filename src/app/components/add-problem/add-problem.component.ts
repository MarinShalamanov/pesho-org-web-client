import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProblemsService } from '../../services/problems.service';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {
  
  public file: File;
  
  public problem = {
    problemname: "Test problem",
    text: "Bla bla",
    version: "vers",
    visibility: "public",
    tags: "bfs, graph", 
    points: 100,
    tests: [{input: "1 1\n", output: "2\n"}, 
           {input: "1 5\n", output: "6\n"}],
    languages: {
      'c++': {
        allowed: true,
        TimeLimit: 100,
        MemoryLimit: 64
      },
      java: {
        allowed: false,
        TimeLimit: 100,
        MemoryLimit: 128
      }
    }
  };
  
  constructor(private router: Router,
              private problemsService: ProblemsService) { }

  ngOnInit() {
  }
  
  public addTestCase() {
    this.problem.tests.push({input:"", output: ""});
  }
  
  public removeTestCase(index) {
    this.problem.tests.splice(index, 1);  
  }
  
  private languageToDTO(langName) {
    return {
      Language: langName,
      TimeLimit: this.problem.languages[langName].TimeLimit,
      MemoryLimit: this.problem.languages[langName].MemoryLimit,
    }
  }
  
  private checkAndAddLangToDTO(languagesDTO, langName) {
    if (this.problem.languages[langName].allowed) {
      languagesDTO[langName] = this.languageToDTO(langName);
    }
  }
  
  public addProblem() {
    let languagesDTO = {};
    this.checkAndAddLangToDTO(languagesDTO, 'c++');
    this.checkAndAddLangToDTO(languagesDTO, 'java');
    
    let problemDTO = {
      problemname: this.problem.problemname,
      text: this.problem.text,
      version: this.problem.version,
      visibility: this.problem.visibility,
      tags: this.problem.tags,
      points: this.problem.points,
      languages: languagesDTO
    };
    
    let zipFile: JSZip = new JSZip();
    for (let i = 0; i < this.problem.tests.length; i++) {
      zipFile.file(`input${i+1}`, this.problem.tests[i].input);
      zipFile.file(`output${i+1}`, this.problem.tests[i].output);
    }
    
    zipFile.generateAsync({type: "blob"})
      .then(testsBlob => {
        console.log(this.problem);
        console.log(problemDTO);
        this.problemsService
          .createProblem(problemDTO, testsBlob);
      
        this.router.navigate([`dashboard/problems`]);
      
      });
  }
  
  public fileChange(event) {
    let fileList: FileList = event.target.files;
    
    if (fileList.length > 0) {
      this.file = fileList[0];
    } else {
      this.file = null;
    }
  }
}
