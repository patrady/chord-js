import { Base } from ".";

export class Sharp extends Base {
  static value = "#";

  public isSharp() {
    return true;
  }

  public getValue() {
    return Sharp.value;
  }

  public getKeyIndex(): number {
    return 1;
  }
}
