import { Note } from "./note";

type NameProps = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export class Name {
  static values = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  static valuesWithFlats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  static fromMidi(value: number) {
    return this.valuesWithFlats[(value - new Note('C1').getMidiValue()) % 12];
  }

  value: NameProps;

  constructor(value: string) {
    if (!this.isValid(value)) {
      this.value = 'C';
    } else {
      this.value = value as NameProps;
    }
  }

  public isC() {
    return this.value === 'C';
  }

  public isD() {
    return this.value === 'D';
  }

  public isE() {
    return this.value === 'E';
  }

  public isF() {
    return this.value === 'F';
  }

  public isG() {
    return this.value === 'G';
  }

  public isA() {
    return this.value === 'A';
  }

  public isB() {
    return this.value === 'B';
  }

  public getKeyIndex() {
    switch (this.value) {
      case 'C':
        return 0;
      case 'D':
        return 2;
      case 'E':
        return 4;
      case 'F':
        return 5;
      case 'G':
        return 7;
      case 'A':
        return 9;
      case 'B':
        return 11;
    }
  }

  private isValid(value: string) {
    return Name.values.includes(value);
  }
}
