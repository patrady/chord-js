import { Base } from ".";

export class DoubleFlat extends Base {
  static value = "bb";

  public getValue() {
    return DoubleFlat.value;
  }

  public getKeyIndex(): number {
    return -2;
  }
}
