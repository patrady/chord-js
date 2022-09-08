import { IAccidental } from ".";

export class Flat implements IAccidental {
  static value = "b";

  public getValue() {
    return Flat.value;
  }

  public getKeyIndex(): number {
    return -1;
  }
}
