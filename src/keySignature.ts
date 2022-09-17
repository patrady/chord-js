import {
  KeySignatureOfA,
  KeySignatureOfAb,
  KeySignatureOfB,
  KeySignatureOfBb,
  KeySignatureOfC,
  KeySignatureOfD,
  KeySignatureOfDb,
  KeySignatureOfE,
  KeySignatureOfEb,
  KeySignatureOfF,
  KeySignatureOfFSharp,
  KeySignatureOfG,
  KeySignatureOfGb,
} from './keySignatures';
import { Note } from './note';
import { Octave } from './octave';

type KeySignatureProps = 'C' | 'Db' | 'D' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'Ab' | 'A' | 'Bb' | 'B';

export abstract class KeySignature {
  public static for(key: KeySignatureProps) {
    switch (key) {
      case 'C':
        return new KeySignatureOfC();
      case 'Db':
        return new KeySignatureOfDb();
      case 'D':
        return new KeySignatureOfD();
      case 'Eb':
        return new KeySignatureOfEb();
      case 'E':
        return new KeySignatureOfE();
      case 'F':
        return new KeySignatureOfF();
      case 'F#':
        return new KeySignatureOfFSharp();
      case 'Gb':
        return new KeySignatureOfGb();
      case 'G':
        return new KeySignatureOfG();
      case 'Ab':
        return new KeySignatureOfAb();
      case 'A':
        return new KeySignatureOfA();
      case 'Bb':
        return new KeySignatureOfBb();
      case 'B':
        return new KeySignatureOfB();
    }
  }

  public abstract getNotes(): Note[];

  public normalize(note: Note) {
    for (const keyNote of this.getNotes()) {
      for (const octave of Octave.all()) {
        const noteWithDifferentOctave = keyNote.setOctave(octave);

        if (noteWithDifferentOctave.matches(note)) {
          return noteWithDifferentOctave;
        }
      }
    }

    return note;
  }
}
