import { PronounceablePasswordService, SecureStorageService } from './../../services';
import { AboutPage } from './about';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavControllerMock, spyOnConsole } from "../../mocks";
import { AppVersion } from 'ionic-native';

describe('Page: AboutPage', () => {

  let fixture: ComponentFixture<AboutPage>;
  let componentInstance: AboutPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      providers: [
        { provide: NavController, useClass: NavControllerMock },
        PronounceablePasswordService, SecureStorageService,
      ],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOnConsole();

    fixture = TestBed.createComponent(AboutPage);
    componentInstance = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should extract app version', () => {
    const appVersion = '1.0.0';
    spyOn(AppVersion, 'getVersionNumber').and.returnValue(Promise.resolve(appVersion));

    componentInstance.extractAppVersion();

    fixture.whenStable().then(() => {
      expect(componentInstance.appVersion).toBe(appVersion);
    });
  });
});
