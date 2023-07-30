import { IAccidental } from '.';

export class DoubleSharp implements IAccidental {
  static value = '𝄪';

  public getValue() {
    return DoubleSharp.value;
  }

  public getKeyIndex(): number {
    return 2;
  }
}
