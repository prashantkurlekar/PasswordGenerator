import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsService {

  constructor(public storage: Storage) { ; }

  public set(key: string, value: any): Promise<any> {
    return this.storage.set(key, value);
  }

  // public getSettings(): Promise<any> {
  //   return Promise.resolve({});
  // }

}
