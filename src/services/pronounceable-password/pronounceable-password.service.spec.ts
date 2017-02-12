// /* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PronounceablePasswordService } from './pronounceable-password.service';

describe('Service: PronounceablePasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PronounceablePasswordService]
    });
  });

  it('should initialize',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should return password',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      const password = service.get();

      expect(password.length).toBeGreaterThanOrEqual(12);
    })
  );
});
