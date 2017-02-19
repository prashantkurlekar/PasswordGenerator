import { Password } from './../../models/password';
import { LoggerService } from './../../services/logger/logger.service';
import { PronounceablePasswordService } from './../../services';
import { Component, Input } from '@angular/core';
import { Clipboard } from 'ionic-native';

@Component({
  selector: 'password-item',
  templateUrl: 'password-item.component.html',
})
export class PasswordItemComponent {

  @Input() passwordSuggestion: any;

  constructor(public passwordService: PronounceablePasswordService) { ; }

  public onCopy(password): void {
    LoggerService.log(`PasswordItemComponent.onCopy`);
    Clipboard.copy(password);
  }

  public onSave(password): void {
    LoggerService.log(`PasswordItemComponent.onSave`);
    this.passwordService.savePassword(new Password(password));
  }

}
