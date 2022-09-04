type Flat = "b";
type Sharp = "#";
type Natural = "♮";
type Accidentals = Flat | Sharp | Natural;

export class Accidental {
  static FLAT: Flat = "b";
  static SHARP: Sharp = "#";
  static NATURAL: Natural = "♮";
  value: Accidentals;

  public static flat() {
    return new Accidental(this.FLAT);
  }
  public static sharp() {
    return new Accidental(this.SHARP);
  }
  public static natural() {
    return new Accidental(this.NATURAL);
  }

  constructor(value?: string) {
    this.value = this.parse(value);
  }

  public isFlat(): boolean {
    return this.value === Accidental.FLAT;
  }

  public isSharp(): boolean {
    return this.value === Accidental.SHARP;
  }

  public isNatural(): boolean {
    return this.value === Accidental.NATURAL;
  }

  private parse(value?: string): Accidentals {
    if (!value || !this.isValid(value)) {
      return Accidental.NATURAL;
    }

    return value as Accidentals;
  }

  private isValid(value: string) {
    return (
      value === Accidental.FLAT ||
      value === Accidental.SHARP ||
      value === Accidental.NATURAL
    );
  }
}
