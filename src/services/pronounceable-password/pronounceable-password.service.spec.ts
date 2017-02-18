import { TestBed, inject } from '@angular/core/testing';
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

  it('should return simple password',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      const passwordLength = 12

      const password = service.getSimplePassword(passwordLength);

      expect(password.length).toBeGreaterThanOrEqual(passwordLength);
    })
  );

  it('should return password with number',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      const passwordLength = 12

      const password = service.getPasswordWithNumber(passwordLength);

      expect(password.length).toBeGreaterThanOrEqual(passwordLength);
      expect(password).toMatch('\\d');
    })
  );
});
