import { StorageService } from './../../services/storage/storage.service';
import { Clipboard } from 'ionic-native';
import { PasswordItemComponent } from './password-item.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Component: PasswordItemComponent', () => {

  let fixture: ComponentFixture<PasswordItemComponent>;
  let componentInstance: PasswordItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordItemComponent],
      imports: [
        IonicModule.forRoot(PasswordItemComponent)
      ],
      providers: [
        StorageService,
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

    fixture = TestBed.createComponent(PasswordItemComponent);
    componentInstance = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should copy password to Clipboard', () => {
    spyOn(Clipboard, 'copy').and.stub();

    componentInstance.onCopy('passwordToCopy');

    expect(Clipboard.copy).toHaveBeenCalled();
  });

});
