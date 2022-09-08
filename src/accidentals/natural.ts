import { IAccidental } from ".";

export class Natural implements IAccidental {
  static value = "♮";

  public getValue() {
    return "";
  }

  public getKeyIndex(): number {
    return 0;
  }
}
