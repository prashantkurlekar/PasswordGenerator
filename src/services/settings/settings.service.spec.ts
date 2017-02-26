import { SecureStorage } from 'ionic-native';
import { SecureStorageService } from '../storage/secure-storage.service';
import { Storage } from '@ionic/storage';
import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { spyOnConsole } from "../../mocks";

describe('Service: SettingsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SecureStorageService, SettingsService,
        SecureStorage, Storage,
      ]
    });
  });

  beforeEach(() => {
    spyOnConsole();
  });

  it('should initialize',
    inject([SettingsService], (service: SettingsService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should save settings',
    async(inject([SettingsService], (service: SettingsService) => {
      const key: string = 'PasswordLength';
      const value: number = 12;

      spyOn(service.storage, 'set').and.stub();

      service.set(key, value);

      expect(service.storage.set).toHaveBeenCalled();
    }))
  );
});
