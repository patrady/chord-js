import { Flat, DoubleFlat, Sharp, DoubleSharp, Natural } from './accidentals';

type Accidentals = 'b' | '𝄫' | '#' | '𝄪' | '♮';

export abstract class Accidental {
  static accidentals = [DoubleFlat.value, Flat.value, Natural.value, Sharp.value, DoubleSharp.value];

  public static flat() {
    return new Flat();
  }

  public static doubleFlat() {
    return new DoubleFlat();
  }

  public static sharp() {
    return new Sharp();
  }

  public static doubleSharp() {
    return new DoubleSharp();
  }

  public static natural() {
    return new Natural();
  }

  public static for(value?: string) {
    const accidental = this.parse(value);
    switch (accidental) {
      case Sharp.value:
        return new Sharp();
      case DoubleSharp.value:
        return new DoubleSharp();
      case Flat.value:
        return new Flat();
      case DoubleFlat.value:
        return new DoubleFlat();
      case Natural.value:
      default:
        return new Natural();
    }
  }

  private static parse(value?: string): Accidentals {
    if (!value || !this.isValid(value)) {
      return Natural.value as Accidentals;
    }

    return value as Accidentals;
  }

  private static isValid(value: string) {
    return this.accidentals.includes(value);
  }
}
