import { SecureStorage } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { AppConfig } from './../../app/app.config';
import { TestBed, async, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('Service: StorageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService, Storage, SecureStorage,
      ]
    });
  });

  beforeEach(() => {
    spyOn(console, 'log').and.stub();
    spyOn(console, 'info').and.stub();
    spyOn(console, 'debug').and.stub();
  });

  it('should initialize',
    inject([StorageService], (service: StorageService) => {
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
