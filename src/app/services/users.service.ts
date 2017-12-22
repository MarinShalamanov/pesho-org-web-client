import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient,
              private apiConfig: ApiConfigService) { }
  
  private PAGE_SIZE = 2000;
  
  private apiPrefix = this.apiConfig.getApiPrefix();
  
  public getUsers() {
    return this.http.get(this.apiPrefix + `users?size=${this.PAGE_SIZE}`);
  }
  
  public getUser(userId) {
    return this.http.get(this.apiPrefix + `users/${userId}`);
  }
  
  public getSubmissionsForUsers(userId) {
    return this.http.get(this.apiPrefix + `users/${userId}/submissions`);
  }
  
  public getUsersInGroup(groupId) {
    return this.http.get(this.apiPrefix + `users/groups/${groupId}?size=${this.PAGE_SIZE}`);
  }
}
