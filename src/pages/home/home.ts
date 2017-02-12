import { PronounceablePasswordService } from './../../services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public generatedPassword: string;

  constructor(public navCtrl: NavController, public pronounceablePasswordService: PronounceablePasswordService) {
    this.onGeneratePassword();
  }

  public onGeneratePassword(): void {
    this.generatedPassword = this.pronounceablePasswordService.get();
  }
}
