import { Password } from './../../models/password';
import { TestBed, inject } from '@angular/core/testing';
import { PronounceablePasswordService } from './pronounceable-password.service';
import { SecureStorageService } from '../storage/secure-storage.service';
import { spyOnConsole } from "../../mocks";

describe('Service: PronounceablePasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PronounceablePasswordService, SecureStorageService]
    });
  });

  beforeEach(() => {
    spyOnConsole();
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

      expect(password.length).toBeGreaterThanOrEqual(1);
    })
  );

  it('should return password with number',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      const passwordLength = 12

      const password = service.getPasswordWithNumber(passwordLength);

      expect(password).toMatch('\\d');
    })
  );

  it('should save the password',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      const password: Password = new Password('my-password', 'gmail.com');
      spyOn(service.storageService, 'get').and.returnValue(Promise.resolve([new Password('one'), new Password('two')]));
      spyOn(service.storageService, 'set').and.stub();

      service.savePassword(password).then(() => {
        expect(service.storageService.set).toHaveBeenCalled();
      });
    })
  );

  it('should return saved passwords',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      spyOn(service.storageService, 'get').and.returnValue(Promise.resolve([new Password('one'), new Password('two')]));

      service.getSavedPasswords().then(() => {
        expect(service.storageService.get).toHaveBeenCalled();
      });
    })
  );

  it('should delete selected password',
    inject([PronounceablePasswordService], (service: PronounceablePasswordService) => {
      const storedPasswords = [new Password('one'), new Password('two'), new Password('three')];
      spyOn(service.storageService, 'get').and.returnValue(Promise.resolve(storedPasswords));

      service.deletePassword('one').then(() => {
        expect(storedPasswords.length).toBe(2);
        expect(service.storageService.get).toHaveBeenCalled();
        expect(service.storageService.set).toHaveBeenCalled();
      });
    })
  );
});
