import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfigService {
  
  private apiPrefix = '/api/v1/';

  constructor() { }
  
  getApiPrefix(): string {
    return this.apiPrefix;
  }
}
