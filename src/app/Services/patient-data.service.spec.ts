import { TestBed } from '@angular/core/testing';

import { PatientDataService } from './patient-data.service';

describe('PatientDataService', () => {
  let service: PatientDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
