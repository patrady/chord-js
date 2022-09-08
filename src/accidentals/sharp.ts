import { IAccidental } from ".";

export class Sharp implements IAccidental {
  static value = "#";

  public getValue() {
    return Sharp.value;
  }

  public getKeyIndex(): number {
    return 1;
  }
}
