import { AppConfig } from './../../app/app.config';
import { PronounceablePasswordService } from './../../services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoggerService } from "../../services/logger/logger.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public simplePasswords: Array<string>;
  public passwordsWithNumber: Array<string>;

  constructor(public navController: NavController, public pronounceablePasswordService: PronounceablePasswordService) {
    LoggerService.log(`HomePage.constructor`);
    this.onGeneratePasswords();
  }

  public onGeneratePasswords(): void {
    LoggerService.log(`HomePage.onGeneratePasswords`);
    this.simplePasswords = this.getSimplePasswords(AppConfig.defaultPasswords / 2, AppConfig.defaultPasswordLength);
    // this.passwordsWithNumber = this.getPasswordWithNumbers(AppConfig.defaultPasswords / 2, AppConfig.defaultPasswordLength);
  }

  private getSimplePasswords(numberOfPasswords: number, passwordLength: number): Array<string> {
    LoggerService.log(`HomePage.getSimplePasswords`);
    let simplePasswords: Array<string> = [];
    for (let index = 0; index < numberOfPasswords; index++) {
      simplePasswords.push(this.pronounceablePasswordService.getSimplePassword(passwordLength));
    }
    return simplePasswords;
  }

  // private getPasswordWithNumbers(numberOfPasswords: number, passwordLength: number): Array<string> {
  //   LoggerService.log(`HomePage.getPasswordWithNumbers`);
  //   let passwordsWithNumber: Array<string> = [];
  //   for (let index = 0; index < numberOfPasswords; index++) {
  //     passwordsWithNumber.push(this.pronounceablePasswordService.getPasswordWithNumber(passwordLength));
  //   }
  //   return passwordsWithNumber;
  // }

}
