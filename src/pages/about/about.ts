import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AppVersion } from 'ionic-native';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  public appVersion: string;

  constructor(public navController: NavController, public platform: Platform) {
    this.extractAppVersion();
  }

  public extractAppVersion(): void {
    this.platform.ready().then(() => {
      AppVersion.getVersionNumber().then(appVersion => {
        this.appVersion = appVersion;
      });
    });
  }

}
