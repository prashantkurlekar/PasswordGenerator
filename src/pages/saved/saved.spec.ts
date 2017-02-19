import { PronounceablePasswordService, SecureStorageService } from './../../services';
import { SavedPage } from './saved';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavControllerMock, spyOnConsole, SecureStorageServiceMock } from "../../mocks";

describe('Page: SavedPage', () => {

  let fixture: ComponentFixture<SavedPage>;
  let componentInstance: SavedPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedPage],
      providers: [
        { provide: NavController, useClass: NavControllerMock },
        { provide: SecureStorageService, useClass: SecureStorageServiceMock },
        PronounceablePasswordService,
      ],
      imports: [
        IonicModule.forRoot(SavedPage)
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOnConsole();

    fixture = TestBed.createComponent(SavedPage);
    componentInstance = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should show saved passwords', () => {
    spyOn(componentInstance.passwordService, 'getSavedPasswords').and.returnValue(Promise.resolve());

    componentInstance.getSavedPasswords();

    fixture.whenStable().then(() => {
      console.log(componentInstance.savedPasswords);
      expect(componentInstance.savedPasswords.length).toBeGreaterThan(0);
    });
  });

});
