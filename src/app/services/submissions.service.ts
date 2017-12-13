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

}
