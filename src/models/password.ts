export class Password {
  public value: string;
  public login: string;
  public labels: Array<string>;
  constructor(value: string, login: string = '', labels: Array<string> = []) {
    this.value = value;
    this.login = login;
    this.labels = labels;
  }
}