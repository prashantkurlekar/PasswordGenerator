import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppVersion } from 'ionic-native';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  public appVersion: string;

  constructor(public navController: NavController) {
    this.extractAppVersion();
  }

  public extractAppVersion(): void {
    AppVersion.getVersionNumber().then(appVersion => {
      this.appVersion = appVersion;
    });
  }

}
