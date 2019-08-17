import { TestBed } from '@angular/core/testing';

import { TimelogService } from './timelog.service';

describe('TimelogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelogService = TestBed.get(TimelogService);
    expect(service).toBeTruthy();
  });
});
