import { LoggerService } from './../../services/logger/logger.service';
import { AppConfig } from './../../app/app.config';
import { StorageService } from './../../services/storage/storage.service';
import { Component, Input } from '@angular/core';
import { Clipboard } from 'ionic-native';

@Component({
  selector: 'password-item',
  templateUrl: 'password-item.component.html',
})
export class PasswordItemComponent {

  @Input() passwordSuggestion: any;

  constructor(public storageService: StorageService) { ; }

  public onCopy(password): void {
    Clipboard.copy(password);
  }

  public onSave(password): void {
    LoggerService.info(password);
    this.storageService.set(AppConfig.storedPasswordsStorageKey, password)
      .then(() => {
        this.storageService.get(AppConfig.storedPasswordsStorageKey).then(value => {
          LoggerService.debug(value);
        });
      });
  }

}
