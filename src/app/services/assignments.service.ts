import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable()
export class AssignmentsService {

  constructor(private http: HttpClient,
              private apiConfig: ApiConfigService) { }
  
  private apiPrefix = this.apiConfig.getApiPrefix();
  
  public getAssignments() {
    return this.http.get(this.apiPrefix + 'assignments');
  }
  
  public getAssignment(assignmentId) {
    return this.http.get(this.apiPrefix + `assignments/${assignmentId}`);
  }
  
  public getProblemsInAssignment(assignmentId) {
    return this.http.get(this.apiPrefix + `assignments/${assignmentId}/problems`);
  }
  
  public getAssignmentsInGroup(groupId) {
    return this.http.get(this.apiPrefix + `assignments/groups/${groupId}`);
  }
  
  public getCurrUserPoints(assignmentId) {
    return this.http.get(this.apiPrefix + `assignments/${assignmentId}/points`);
  }
  
  public getStandings(assignmentId) {
    return this.http.get(this.apiPrefix + `assignments/${assignmentId}/standings`);
  }
}
