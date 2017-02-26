import { PronounceablePasswordService, SettingsService } from './../../services';
import { SettingsPage } from './settings';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavControllerMock, spyOnConsole } from "../../mocks";
import { Storage } from '@ionic/storage';
import { Setting } from '../../models/setting';

describe('Page: SettingsPage', () => {

  let fixture: ComponentFixture<SettingsPage>;
  let componentInstance: SettingsPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsPage],
      providers: [
        { provide: NavController, useClass: NavControllerMock },
        PronounceablePasswordService,
        SettingsService, Storage,
      ],
      imports: [
        IonicModule.forRoot(SettingsPage)
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOnConsole();

    fixture = TestBed.createComponent(SettingsPage);
    componentInstance = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(componentInstance).toBeDefined();
  });

  // it('should show default setting', () => {
  //   const settings = [new Setting('length', 10), new Setting('number', true)];
  //   spyOn(componentInstance.settingsService, 'getSettings').and.returnValue(Promise.resolve(settings));
  // });

});
