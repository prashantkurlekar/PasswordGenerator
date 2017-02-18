import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor(public storageService: StorageService) { ; }

  public set(key: string, value: any) {
    this.storageService.set(key, value);
  }

}
