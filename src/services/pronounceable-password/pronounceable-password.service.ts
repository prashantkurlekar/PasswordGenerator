import { LoggerService } from './../logger/logger.service';
import { Password } from './../../models/password';
import { AppConfig } from './../../app/app.config';
import { SecureStorageService } from './../storage/secure-storage.service';
import { Injectable } from '@angular/core';
import { GPW } from './gpw';
import * as _ from 'lodash';

@Injectable()
export class PronounceablePasswordService {

  constructor(public storageService: SecureStorageService) { ; }

  public getSimplePassword(passwordLength: number): string {
    LoggerService.log(`PronounceablePasswordService.getSimplePassword`);
    return GPW.pronounceable(passwordLength);
  }

  public getPasswordWithNumber(passwordLength: number): string {
    LoggerService.log(`PronounceablePasswordService.getPasswordWithNumber`);
    // return `${GPW.pronounceable(passwordLength - 2)}${Math.floor((Math.random() * 99) + 1)}`;
    let simplePasswordLength = passwordLength - 2;
    let simplePassword = this.getSimplePassword(simplePasswordLength);
    const numberLocation = this.randomNumber(simplePasswordLength);
    return `${simplePassword.substring(0, numberLocation)}${this.randomNumber(99)}${simplePassword.substring(numberLocation)}`;
  }

  private randomNumber(max: number): number {
    return Math.floor((Math.random() * max) + 1);
  }

  public savePassword(password: Password): Promise<any> {
    LoggerService.log(`PronounceablePasswordService.savePassword`);
    return this.storageService.get(AppConfig.savedPasswordsStorageKey)
      .then(storedPasswords => {
        storedPasswords = this.extractStoredPasswords(storedPasswords);
        storedPasswords.push(password);
        LoggerService.debug(JSON.stringify(storedPasswords));
        this.storageService.set(AppConfig.savedPasswordsStorageKey, storedPasswords);
      });
  }

  private extractStoredPasswords(storedPasswords): Array<Password> {
    // if (!storedPasswords)
    //   storedPasswords = [];
    // if (typeof (storedPasswords) === 'string')
    //   storedPasswords = JSON.parse(storedPasswords);
    // return storedPasswords;
    return !storedPasswords ? [] : JSON.parse(storedPasswords);
  }

  public getSavedPasswords(): Promise<any> {
    return this.storageService.get(AppConfig.savedPasswordsStorageKey)
      .then(savedPasswords => {
        LoggerService.log(savedPasswords);
        return this.extractStoredPasswords(savedPasswords);
      });
  }

  public deletePassword(passwordToDelete: string): Promise<any> {
    return this.getSavedPasswords().then(savedPasswords => {
      _.remove(savedPasswords, (password: Password) => {
        return password.value === passwordToDelete;
      });
      this.storageService.set(AppConfig.savedPasswordsStorageKey, savedPasswords);
    });
  }
}
