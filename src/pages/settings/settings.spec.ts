import { PronounceablePasswordService } from './../../services';
import { SettingsPage } from './settings';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavControllerMock } from "../../mocks";

describe('Page: SettingsPage', () => {

  let fixture: ComponentFixture<SettingsPage>;
  let componentInstance: SettingsPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsPage],
      providers: [
        { provide: NavController, useClass: NavControllerMock },
        PronounceablePasswordService,
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
    spyOn(console, 'log').and.stub();
    spyOn(console, 'info').and.stub();
    spyOn(console, 'debug').and.stub();

    fixture = TestBed.createComponent(SettingsPage);
    componentInstance = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(componentInstance).toBeDefined();
  });

});
