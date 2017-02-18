import { LoggerService } from './../logger/logger.service';
import { Injectable } from '@angular/core';
import { SecureStorage, AppVersion } from 'ionic-native';

@Injectable()
export class StorageService {

  public storage: SecureStorage;

  constructor() {
    LoggerService.info('StorageService.constructor');
    this.storage = new SecureStorage();
    this.create(this.storage);
  }

  private create(storage: SecureStorage): void {
    LoggerService.info('StorageService.create');
    AppVersion.getAppName().then(appName => {
      LoggerService.debug(appName);
      storage.create(appName).then(() => {
        LoggerService.info('Secure storage ready');
      });
    });
  }

  public set(key: string, value: string): Promise<any> {
    LoggerService.info(`StorageService.set`);
    return this.storage.set(key, value).then(value => {
      console.log(value);
    });
  }

  public get(key: string): Promise<any> {
    LoggerService.info(`StorageService.get`);
    return this.storage.get(key).then(value => {
      return value;
    });
  }

  public remove(key: string): Promise<any> {
    LoggerService.info(`StorageService.remove`);
    return this.storage.remove(key).then(value => {
      return value;
    });
  }
}
