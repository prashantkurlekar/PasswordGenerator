import { SecureStorageService } from './../storage/secure-storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor(public storageService: SecureStorageService) { ; }

  public set(key: string, value: any) {
    this.storageService.set(key, value);
  }

}
