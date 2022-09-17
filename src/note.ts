import { Accidental } from './accidental';
import { IAccidental } from './accidentals/IAccidental';
import { Name } from './name';
import { Octave, OctaveProps } from './octave';

export class Note {
  public name: Name;
  public accidental: IAccidental;
  public octave: Octave;

  public static fromMidi(value: number) {
    if (value < 21 || value > 108) {
      throw new Error('Invalid Midi note');
    }

    if (21 <= value && value <= 23) {
      switch (value) {
        case 21:
          return new Note('A0');
        case 22:
          return new Note('Bb0');
        case 23:
          return new Note('B0');
      }
    }

    return new Note(`${Note.getNameFromMidi(value)}${Octave.fromMidi(value)}`);
  }

  private static getNameFromMidi(value: number) {
    const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    return notes[(value - new Note('C1').getMidiValue()) % notes.length];
  }

  constructor(value: string) {
    const result = this.parse(value);
    if (!result) {
      throw new Error('Invalid note');
    }

    const [, name, accidental, octave] = result;
    this.name = new Name(name);
    this.accidental = Accidental.for(accidental);
    this.octave = new Octave(octave);
  }

  public getName() {
    return `${this.name.value}${this.accidental.getValue()}`;
  }

  public getScientificName() {
    return `${this.getName()}${this.getOctave()}`;
  }

  public getOctave() {
    return this.octave.value;
  }

  public setOctave(octave: OctaveProps) {
    try {
      return new Note(`${this.getName()}${octave}`);
    } catch {
      return this;
    }
  }

  public getFrequency() {
    return parseFloat((Math.pow(2, (this.getKeyNumber() - 49) / 12) * 440).toFixed(5));
  }

  public getKeyNumber() {
    if (this.octave.isSubContra()) {
      switch (this.getName()) {
        case 'A':
        case 'Bbb':
          return 1;
        case 'A#':
        case 'Bb':
          return 2;
        case 'B':
        case 'A##':
          return 3;
        case 'B#':
          return 4;
      }
    }

    return 4 + (this.getOctave() - 1) * 12 + this.getKeyIndex();
  }

  public getKeyIndex() {
    return this.name.getKeyIndex() + this.accidental.getKeyIndex();
  }

  public getMidiValue() {
    if (this.octave.isSubContra()) {
      switch (this.getName()) {
        case 'A':
        case 'Bbb':
          return 21;
        case 'A#':
        case 'Bb':
          return 22;
        case 'B':
        case 'A##':
          return 23;
        case 'B#':
          return 24;
      }
    }

    return 24 + (this.getOctave() - 1) * 12 + this.getKeyIndex();
  }

  // TODO: What does it mean to minus two notes? This needs to be more descriptive
  public minus(note: Note) {
    if (this.isLessThan(note)) {
      return this.getKeyIndex() - note.getKeyIndex() + 12;
    }

    return this.getKeyIndex() - note.getKeyIndex();
  }

  public matches(note: Note) {
    return this.getMidiValue() === note.getMidiValue();
  }

  public equals(note: Note) {
    return this.getScientificName() === note.getScientificName();
  }

  private isLessThan(note: Note) {
    return this.getKeyIndex() < note.getKeyIndex();
  }

  private parse(value: string) {
    const result = /([A-G]){1}(bb|##|b|#)?(\d)?/g.exec(value);
    if (!this.isValid(result)) {
      return null;
    }

    return result;
  }

  private isValid(value: null | RegExpExecArray) {
    if (!value) {
      return false;
    }

    const [, _name, , _octave] = value;
    const name = new Name(_name);
    const octave = new Octave(_octave);

    if (octave.isFiveLine() && !name.isC()) {
      return false;
    }

    if (octave.isSubContra() && !name.isA() && !name.isB()) {
      return false;
    }

    return true;
  }
}
