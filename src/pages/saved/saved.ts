import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PronounceablePasswordService } from "../../services/index";
import { LoggerService } from "../../services/logger/logger.service";
import { Password } from "../../models/password";

@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html'
})
export class SavedPage {

  public savedPasswords = [];

  constructor(public navController: NavController, public passwordService: PronounceablePasswordService) { ; }

  public ionViewDidLoad() {
    LoggerService.log('ionViewDidLoad SavedPage');
  }

  public ionViewDidEnter() {
    LoggerService.log('ionViewDidEnter SavedPage');
    this.getSavedPasswords();
  }

  public getSavedPasswords(): void {
    LoggerService.log(`SavedPage.getSavedPasswords`);
    this.passwordService.getSavedPasswords()
      .then(passwords => {
        this.savedPasswords = passwords;
      })
      .catch(error => {
        LoggerService.error(error);
      });
  }

  public onRemove(passwordToDelete: Password): void {
    LoggerService.log(`SavedPage.onRemove`);
    LoggerService.debug(this.savedPasswords.length);
    this.passwordService.deletePassword(passwordToDelete.value).then(() => {
      this.ionViewDidEnter();
    });
  }

}
