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

}
