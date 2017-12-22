import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable()
export class GroupsServiceService {

  constructor(private http: HttpClient,
              private apiConfig: ApiConfigService) { }
  
  private apiPrefix = this.apiConfig.getApiPrefix();
  private PAGE_SIZE = 100;
  
  public getGroups() {
    return this.http.get(this.apiPrefix + `groups?size=${this.PAGE_SIZE}`);
  }
  
  public getGroup(groupId) {
    return this.http.get(this.apiPrefix + `groups/${groupId}`);
  }
}
