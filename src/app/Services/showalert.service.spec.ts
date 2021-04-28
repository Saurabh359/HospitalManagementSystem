import { TestBed } from '@angular/core/testing';

import { ShowalertService } from './showalert.service';

describe('ShowalertService', () => {
  let service: ShowalertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowalertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
