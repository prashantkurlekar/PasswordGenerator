import { AppConfig } from './../../app/app.config';
import { PronounceablePasswordService } from './../../services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public simplePasswords: Array<string>;
  public passwordsWithNumber: Array<string>;

  constructor(public navCtrl: NavController, public pronounceablePasswordService: PronounceablePasswordService) {
    this.onGeneratePasswords();
  }

  public onGeneratePasswords(): void {
    this.simplePasswords = this.getSimplePasswords(AppConfig.defaultPasswords / 2, AppConfig.defaultPasswordLength);
    this.passwordsWithNumber = this.getPasswordWithNumbers(AppConfig.defaultPasswords / 2, AppConfig.defaultPasswordLength);
  }

  private getSimplePasswords(numberOfPasswords: number, passwordLength: number): Array<string> {
    let simplePasswords: Array<string> = [];
    for (let index = 0; index < numberOfPasswords; index++) {
      simplePasswords.push(this.pronounceablePasswordService.getSimplePassword(passwordLength));
    }
    return simplePasswords;
  }

  private getPasswordWithNumbers(numberOfPasswords: number, passwordLength: number): Array<string> {
    let passwordsWithNumber: Array<string> = [];
    for (let index = 0; index < numberOfPasswords; index++) {
      passwordsWithNumber.push(this.pronounceablePasswordService.getPasswordWithNumber(passwordLength));
    }
    return passwordsWithNumber;
  }

  public onCopy(password): void {
    Clipboard.copy(password);
  }

}
