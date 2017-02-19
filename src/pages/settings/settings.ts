import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navController: NavController) { }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
