import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PronounceablePasswordService } from "../../services/index";
import { LoggerService } from "../../services/logger/logger.service";

@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html'
})
export class SavedPage {

  public savedPasswords: any;

  constructor(public navController: NavController, public passwordService: PronounceablePasswordService) { ; }

  public ionViewDidLoad() {
    LoggerService.log('ionViewDidLoad SavedPage');
    // this.getSavedPasswords();
  }

  public ionViewDidEnter() {
    LoggerService.log('ionViewDidEnter SavedPage');
    this.getSavedPasswords();
  }

  public getSavedPasswords(): void {
    this.passwordService.getSavedPasswords().then(passwords => {
      LoggerService.debug(passwords);
      this.savedPasswords = passwords;
    });
  }

}
