import { NgModule } from '@angular/core';
import {
  PasswordItemComponent,
} from './';
import { IonicModule } from 'ionic-angular';

const components = [
  PasswordItemComponent,
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule,
  ],
  exports: components,
  entryComponents: components,
})
export class ComponentsModule { }
