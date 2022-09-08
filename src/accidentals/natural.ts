import { Base } from ".";

export class Natural extends Base {
  static value = "♮";

  public isNatural() {
    return true;
  }

  public getValue() {
    return "";
  }

  public getKeyIndex(): number {
    return 0;
  }
}
