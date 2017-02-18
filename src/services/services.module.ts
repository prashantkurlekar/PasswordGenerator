import { PronounceablePasswordService, SettingsService, StorageService } from './';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule,
  ],
  providers: [
    PronounceablePasswordService, SettingsService, StorageService,
  ],
})
export class ServicesModule { }
