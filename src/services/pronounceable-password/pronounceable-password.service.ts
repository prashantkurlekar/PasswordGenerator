import { Injectable } from '@angular/core';
import { GPW } from './gpw';

@Injectable()
export class PronounceablePasswordService {

  constructor() { }

  public getSimplePassword(passwordLength: number): string {
    return GPW.pronounceable(passwordLength);
  }

  public getPasswordWithNumber(passwordLength: number): string {
    return `${GPW.pronounceable(passwordLength - 2)}${Math.floor((Math.random() * 99) + 1)}`;
  }
}
