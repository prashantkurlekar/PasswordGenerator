import { ServicesModule } from './../services/services.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from './../components/components.module';

const components = [
  MyApp,
  AboutPage,
  HomePage,
  TabsPage
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule.forRoot(MyApp),
    ServicesModule, ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
