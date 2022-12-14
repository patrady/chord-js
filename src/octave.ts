import { Note } from './note';

type MiddleOctave = 4;
export type OctaveProps = 0 | 1 | 2 | 3 | MiddleOctave | 5 | 6 | 7 | 8 | 9;

export class Octave {
  static MIN = 0;
  static MAX = 8;
  static MIDDLE = 4;

  public static middle() {
    return new Octave(this.MIDDLE);
  }

  public static fromMidi(value: number) {
    if (21 <= value && value <= 23) {
      return new Octave(0);
    }

    return new Octave(Math.ceil((value - new Note('C1').getMidiValue() + 1) / 12));
  }

  public static all() {
    return [...Array(this.MAX - this.MIN + 1).keys()] as OctaveProps[];
  }

  value: OctaveProps;

  constructor(value?: string | number) {
    this.value = this.parse(value);
  }

  public isSubContra() {
    return this.value === 0;
  }

  public isFiveLine() {
    return this.value === 8;
  }

  public toString() {
    return this.value.toString();
  }

  public equals(octave: Octave) {
    return this.value === octave.value;
  }

  private parse(value?: string | number): OctaveProps {
    let result: number = Octave.MIDDLE;

    if (value === undefined) {
      return result as OctaveProps;
    }

    if (typeof value === 'string') {
      result = parseInt(value, 10);
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
