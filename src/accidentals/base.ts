export abstract class Base {
  public isFlat() {
    return false;
  }

  public isDoubleFlat() {
    return false;
  }

  public isSharp() {
    return false;
  }

  public isDoubleSharp() {
    return false;
  }

  public isNatural() {
    return false;
  }

  public abstract getValue(): string;
  public abstract getKeyIndex(): number;
  public isMatch(value: string): boolean {
    return this.getValue() === value;
  }
}
