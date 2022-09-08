import { Base } from ".";

export class Flat extends Base {
  static value = "b";

  public isFlat() {
    return true;
  }

  public getValue() {
    return Flat.value;
  }

  public getKeyIndex(): number {
    return -1;
  }
}
