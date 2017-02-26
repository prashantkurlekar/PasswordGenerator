export class Setting {
  public Key: string;
  public Value: any;
  public Description: string;
  constructor(key: string, value: any) {
    this.Key = key;
    this.Value = value;
  }
}