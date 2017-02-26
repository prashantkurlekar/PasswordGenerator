import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../services';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navController: NavController, public settingsService: SettingsService) { }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
