import { TestBed, inject } from '@angular/core/testing';

import { BaseDateService } from './base-date.service';

describe('BaseDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseDateService]
    });
  });

  it('should be created', inject([BaseDateService], (service: BaseDateService) => {
    expect(service).toBeTruthy();
  }));
});
