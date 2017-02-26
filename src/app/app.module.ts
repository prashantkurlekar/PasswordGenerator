import { ServicesModule } from './../services/services.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PronounceablePasswordApp } from './app.component';
import { AboutPage, HomePage, SavedPage, SettingsPage, TabsPage } from '../pages';
import { ComponentsModule } from './../components/components.module';

const components = [
  PronounceablePasswordApp,
  AboutPage, HomePage, SettingsPage, SavedPage, TabsPage,
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
