import { SecureStorage } from 'ionic-native';
import { Storage } from '@ionic/storage';
// import { AppConfig } from './../../app/app.config';
import { TestBed, inject } from '@angular/core/testing';
import { SecureStorageService } from './secure-storage.service';
import { spyOnConsole } from "../../mocks";

describe('Service: StorageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SecureStorageService, Storage, SecureStorage,
      ]
    });
  });

  beforeEach(() => {
    spyOnConsole();
  });

  it('should initialize',
    inject([SecureStorageService], (service: SecureStorageService) => {
      expect(service).toBeTruthy();
    })
  );

  // it('should save data in secure storage',
  //   async(inject([StorageService], (service: StorageService) => {
  //     const key: string = 'defaultPasswordLength';
  //     const value: any = 10;

  //     spyOn(StorageService.storage, 'set').and.stub();

  //     service.set(key, value);

  //     expect(StorageService.storage.set).toHaveBeenCalled();
  //   }))
  // );

  // it('should save data in storage',
  //   async(inject([StorageService], (service: StorageService) => {
  //   }))
  // );

});
