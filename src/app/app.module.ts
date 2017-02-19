import { ServicesModule } from './../services/services.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PronounceablePasswordApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SavedPage } from '../pages/saved/saved';
import { ComponentsModule } from './../components/components.module';

const components = [
  PronounceablePasswordApp, AboutPage, HomePage,
  SettingsPage, SavedPage,
  TabsPage,
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule.forRoot(PronounceablePasswordApp),
    ServicesModule, ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
