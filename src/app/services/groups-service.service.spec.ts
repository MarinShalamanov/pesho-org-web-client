import { TestBed, inject } from '@angular/core/testing';

import { GroupsServiceService } from './groups-service.service';

describe('GroupsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupsServiceService]
    });
  });

  it('should be created', inject([GroupsServiceService], (service: GroupsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
