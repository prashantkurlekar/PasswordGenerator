import { LoggerService } from './../logger/logger.service';
import { Injectable } from '@angular/core';
import { SecureStorage } from 'ionic-native';

@Injectable()
export class SecureStorageService {

  public storage: SecureStorage;

  constructor() {
    LoggerService.log('StorageService.constructor');
    this.create(this.storage);
  }

  private create(storage: SecureStorage): void {
    LoggerService.log('StorageService.create');
    this.storage = new SecureStorage();
    // AppVersion.getAppName().then(appName => {
    //   LoggerService.log(appName);
    this.storage.create('pPassword').then(() => {
      LoggerService.log('Secure storage ready');
    });
    // });
  }

  public set(key: string, value: string): Promise<any> {
    LoggerService.log(`StorageService.set`);
    LoggerService.log(value);
    return this.storage.set(key, JSON.stringify(value));
  }

  public get(key: string): Promise<any> {
    LoggerService.log(`StorageService.get`);
    return this.storage.get(key).then(
      data => { return JSON.parse(data); },
      error => LoggerService.error(error));
  }

  public remove(key: string): Promise<any> {
    LoggerService.log(`StorageService.remove`);
    return this.storage.remove(key);
  }
}
