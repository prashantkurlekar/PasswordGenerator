import { LoggerService } from './../logger/logger.service';
import { Injectable } from '@angular/core';
import { SecureStorage, AppVersion } from 'ionic-native';
import { AppConfig } from './../../app/app.config';

@Injectable()
export class SecureStorageService {

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
        this.remove(AppConfig.savedPasswordsStorageKey);
      });
    });
  }

  public set(key: string, value: string): Promise<any> {
    LoggerService.info(`StorageService.set`);
    return this.storage.set(key, value);
  }

  public get(key: string): Promise<any> {
    LoggerService.info(`StorageService.get`);
    return this.storage.get(key).then(
      data => { return JSON.parse(data); },
      error => LoggerService.error(error));
  }

  public remove(key: string): Promise<any> {
    LoggerService.info(`StorageService.remove`);
    return this.storage.remove(key);
  }
}
