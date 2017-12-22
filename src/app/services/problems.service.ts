import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable()
export class ProblemsService {

  constructor(private http: HttpClient,
              private apiConfig: ApiConfigService) { }
  
  private apiPrefix = this.apiConfig.getApiPrefix();
  
  public getProblems() {
    return this.http.get(this.apiPrefix + 'problems');
  }
  
  public getProblem(problemId) {
    return this.http.get(this.apiPrefix + `problems/${problemId}`);
  }
  
  public getProblemFromAssignment(contestId, problemId) {
    return this.http.get(this.apiPrefix + `assignments/${contestId}/problems/${problemId}`);
  }
  
  public createProblem(problem, testsBlob) {
    let formData:FormData = new FormData();
    formData.append('file', testsBlob, 'tests.zip');
    formData.append('metadata', new Blob([JSON.stringify(problem)], {type: "application/json"}));
    
    let headers = new HttpHeaders();
    /** No need to include Content-Type in Angular 4 */
    headers.append('Content-Type', 'multipart/form-data');
    
    this.http.post(this.apiPrefix + `problems`, formData, { headers: headers })
        .subscribe(
            data => console.log('success'),
            error => console.log(error)
        )
  }
  
}
