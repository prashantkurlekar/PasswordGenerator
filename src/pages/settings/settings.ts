import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navController: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
