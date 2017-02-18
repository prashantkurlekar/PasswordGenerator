// import { SecureStorage } from 'ionic-native';
// import { StorageService } from './../storage/storage.service';
// import { Storage } from '@ionic/storage';
// import { TestBed, async, inject } from '@angular/core/testing';
// import { SettingsService } from './settings.service';

// describe('Service: SettingsService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         SettingsService, Storage, StorageService, SecureStorage,
//       ]
//     });
//   });

//   beforeEach(() => {
//     spyOn(console, 'log').and.stub();
//     spyOn(console, 'info').and.stub();
//     spyOn(console, 'debug').and.stub();
//   });

//   it('should initialize',
//     inject([SettingsService], (service: SettingsService) => {
//       expect(service).toBeTruthy();
//     })
//   );

//   it('should save settings',
//     async(inject([SettingsService], (service: SettingsService) => {
//       const key: string = 'PasswordLength';
//       const value: number = 12;

//       spyOn(service, 'set').and.stub();

//       service.set(key, value);

//       expect(service.set).toHaveBeenCalled();
//     }))
//   );
// });
