import { Clipboard } from 'ionic-native';
import { PronounceablePasswordService } from './../../services';
import { HomePage } from './home';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavControllerMock } from "../../mocks";

describe('Page: HomePage', () => {

  let fixture: ComponentFixture<HomePage>;
  let componentInstance: HomePage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        { provide: NavController, useClass: NavControllerMock },
        PronounceablePasswordService
      ],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(console, 'log').and.stub();
    spyOn(console, 'info').and.stub();
    spyOn(console, 'debug').and.stub();

    fixture = TestBed.createComponent(HomePage);
    componentInstance = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should get new passwords', () => {
    spyOn(componentInstance.pronounceablePasswordService, 'getSimplePassword').and.returnValue('012345678912');

    componentInstance.onGeneratePasswords();

    expect(componentInstance.simplePasswords.length).toBeGreaterThan(0);
    expect(componentInstance.passwordsWithNumber.length).toBeGreaterThan(0);
  });

  it('should copy password to Clipboard', () => {
    spyOn(Clipboard, 'copy').and.stub();

    componentInstance.onCopy('passwordToCopy');

    expect(Clipboard.copy).toHaveBeenCalled();
  });

});
