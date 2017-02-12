import { PronounceablePasswordService } from './../../services';
import { HomePage } from './home';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavParams, NavController } from 'ionic-angular';
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

  it('should get new password', () => {
    spyOn(componentInstance.pronounceablePasswordService, 'get').and.returnValue('012345678912');

    componentInstance.onGeneratePassword();

    expect(componentInstance.generatedPassword.length).toBe(12);
  });

});
