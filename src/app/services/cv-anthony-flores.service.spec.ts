import { TestBed } from '@angular/core/testing';

import { CvAnthonyFloresService } from './cv-anthony-flores.service';

describe('CvAnthonyFloresService', () => {
  let service: CvAnthonyFloresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvAnthonyFloresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
