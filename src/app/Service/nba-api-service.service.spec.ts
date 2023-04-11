import { TestBed } from '@angular/core/testing';

import { NbaApiServiceService } from './nba-api-service.service';

describe('NbaApiServiceService', () => {
  let service: NbaApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
