import { PronounceablePasswordService, SecureStorageService, SettingsService } from './';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule,
  ],
  providers: [
    PronounceablePasswordService, SecureStorageService, SettingsService,
  ],
})
export class ServicesModule { }
