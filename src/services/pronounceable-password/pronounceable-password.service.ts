import { LoggerService } from './../logger/logger.service';
import { Password } from './../../models/password';
import { AppConfig } from './../../app/app.config';
import { SecureStorageService } from './../storage/secure-storage.service';
import { Injectable } from '@angular/core';
import { GPW } from './gpw';

@Injectable()
export class PronounceablePasswordService {

  constructor(public storageService: SecureStorageService) { ; }

  public getSimplePassword(passwordLength: number): string {
    LoggerService.log(`PronounceablePasswordService.getSimplePassword`);
    return GPW.pronounceable(passwordLength);
  }

  public getPasswordWithNumber(passwordLength: number): string {
    LoggerService.log(`PronounceablePasswordService.getPasswordWithNumber`);
    return `${GPW.pronounceable(passwordLength - 2)}${Math.floor((Math.random() * 99) + 1)}`;
  }

  public savePassword(password: Password): Promise<any> {
    LoggerService.log(`PronounceablePasswordService.savePassword`);
    return this.storageService.get(AppConfig.savedPasswordsStorageKey)
      .then(storedPasswords => {
        storedPasswords = this.extractStoredPasswords(storedPasswords);
        LoggerService.debug(storedPasswords);
        storedPasswords.push(password);
        this.storageService.set(AppConfig.savedPasswordsStorageKey, JSON.stringify(storedPasswords));
      });
  }

  private extractStoredPasswords(storedPasswords): Array<Password> {
    LoggerService.log(storedPasswords);
    if (!storedPasswords)
      storedPasswords = [];
    if (typeof (storedPasswords) === 'string')
      storedPasswords = JSON.parse(storedPasswords);
    return storedPasswords;
  }

  public getSavedPasswords(): Promise<any> {
    return this.storageService.get(AppConfig.savedPasswordsStorageKey)
      .then(storedPasswords => {
        LoggerService.log(storedPasswords);
        return this.extractStoredPasswords(storedPasswords);
      });
  }
}
