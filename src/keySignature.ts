import {
  KeySignatureOfA,
  KeySignatureOfB,
  KeySignatureOfC,
  KeySignatureOfD,
  KeySignatureOfE,
  KeySignatureOfF,
  KeySignatureOfG,
} from './keySignatures';
import { Note } from './note';
import { Octave } from './octave';

type KeySignatureProps = 'C' | 'Db' | 'D' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'Ab' | 'A' | 'Bb' | 'B';

export abstract class KeySignature {
  public static for(key: KeySignatureProps) {
    switch (key) {
      case 'C':
        return new KeySignatureOfC();
      case 'D':
        return new KeySignatureOfD();
      case 'E':
        return new KeySignatureOfE();
      case 'F':
        return new KeySignatureOfF();
      case 'G':
        return new KeySignatureOfG();
      case 'A':
        return new KeySignatureOfA();
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
