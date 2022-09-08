import { IAccidental } from '.';

export class DoubleFlat implements IAccidental {
  static value = 'bb';

  public getValue() {
    return DoubleFlat.value;
  }

  public getKeyIndex(): number {
    return -2;
  }
}
