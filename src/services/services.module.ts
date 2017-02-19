import { PronounceablePasswordService, SettingsService, SecureStorageService } from './';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule,
  ],
  providers: [
    PronounceablePasswordService, SettingsService, SecureStorageService,
  ],
})
export class ServicesModule { }
