import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import 'rxjs/add/operator/map';

@Injectable()
export class LoggerService {

  public static log(message: any): void {
    console.log(message);
  }

  public static error(message: any): void {
    console.error(message);
  }

  public static info(message: any): void {
    console.log(message);
  }

  public static warn(message: any): void {
    console.warn(message);
  }

  public static debug(message: any): void {
    console.debug(message);
  }

  public static trackView(platform: Platform, title: string): void {
    platform.ready().then(() => {
      GoogleAnalytics.trackView(title);
    });
  }

  public static trackEvent(platform: Platform, category: any, action: any, label: any, value: any): void {
    platform.ready().then(() => {
      GoogleAnalytics.trackEvent(category, action, label, value);
    });
  }

}
