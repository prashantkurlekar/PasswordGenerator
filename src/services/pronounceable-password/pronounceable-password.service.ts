import { Injectable } from '@angular/core';
import { GPW } from './gpw';

@Injectable()
export class PronounceablePasswordService {

  constructor() { }

  public get(): string {
    return GPW.pronounceable(12);
  }
}

