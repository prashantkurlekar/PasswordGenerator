import { Password } from './models/password';
export class ConfigMock {

  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 1;
  }
}

export class FormMock {
  public register(): any {
    return true;
  }
}

export class NavControllerMock {

  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }
}

export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export class SecureStorageServiceMock {
  public get(key: string): Promise<any> {
    let value: any;
    switch (key) {
      case 'SavedPasswords':
        value = Promise.resolve([new Password('one'), new Password('two', 'gmail.com')]);
        break;
      default:
        value = Promise.resolve('SHOULD NOT BE HERE');
        break;
    }
    return value;
  }
}

export function spyOnConsole() {
  spyOn(console, 'log').and.stub();
  spyOn(console, 'info').and.stub();
  spyOn(console, 'debug').and.stub();
  spyOn(console, 'warn').and.stub();
  spyOn(console, 'error').and.stub();
}