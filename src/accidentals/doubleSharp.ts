import { Base } from ".";

export class DoubleSharp extends Base {
  static value = "##";

  public getValue() {
    return DoubleSharp.value;
  }

  public getKeyIndex(): number {
    return 2;
  }
}
