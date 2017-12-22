import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable()
export class SubmissionsService {

  constructor(private http: HttpClient,
              private apiConfig: ApiConfigService) { }
  
  private apiPrefix = this.apiConfig.getApiPrefix();
  
  public getSubmissions() {
    return this.http.get(this.apiPrefix + 'submissions');
  }
  
  public getSubmission(submissionId) {
    return this.http.get(this.apiPrefix + `submissions/${submissionId}`);
  }
  
  public getMySubmissionsInAssignment(assignmentId) {
    return this.http.get(this.apiPrefix + `submissions/assignments/${assignmentId}`);
  }
  
  public getSubmissionsInGroup(groupId) {
    return this.http.get(this.apiPrefix + `submissions/groups/${groupId}`);
  } 
  
  public submitCode(file, metadata) {
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('metadata', new Blob([JSON.stringify(metadata)], {type: "application/json"}));
    
    let headers = new HttpHeaders();
    /** No need to include Content-Type in Angular 4 */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    
    this.http.post(`${this.apiPrefix}submissions`, formData, { headers: headers })
        .subscribe(
            data => console.log('success'),
            error => console.log(error)
        )
  }

}
