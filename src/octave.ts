type MiddleOctave = 4;
type OctaveProps = 0 | 1 | 2 | 3 | MiddleOctave | 5 | 6 | 7 | 8;

export class Octave {
  static MIN = 0;
  static MAX = 8;
  static MIDDLE = 4;

  public static middle() {
    return new Octave(this.MIDDLE);
  }

  value: OctaveProps;

  constructor(value?: string | number) {
    this.value = this.parse(value);
  }

  public isSubContra() {
    return this.value === 0;
  }

  public isContra() {
    return this.value === 1;
  }

  public isGreat() {
    return this.value === 2;
  }

  public isSmall() {
    return this.value === 3;
  }

  public isOneLine() {
    return this.value === 4;
  }

  public isTwoLine() {
    return this.value === 5;
  }

  public isThreeLine() {
    return this.value === 6;
  }

  public isFourLine() {
    return this.value === 7;
  }

  public isFiveLine() {
    return this.value === 8;
  }

  public toString() {
    return this.value.toString();
  }

  private parse(value?: string | number): OctaveProps {
    let result: number = Octave.MIDDLE;

    if (value === undefined) {
      return result as OctaveProps;
    }

    if (typeof value === "string") {
      result = parseInt(value);
    } else {
      result = value;
    }

    if (!this.isValid(result)) {
      result = Octave.MIDDLE;
    }

    return result as OctaveProps;
  }

  private isValid(value: number) {
    return Octave.MIN <= value && value <= Octave.MAX;
  }
}
