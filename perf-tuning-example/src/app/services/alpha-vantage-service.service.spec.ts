import { TestBed } from '@angular/core/testing';

import { AlphaVantageServiceService } from './alpha-vantage-service.service';

describe('AlphaVantageServiceService', () => {
  let service: AlphaVantageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphaVantageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
