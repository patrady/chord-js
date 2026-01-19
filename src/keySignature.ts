import {
  KeySignatureOfA,
  KeySignatureOfAb,
  KeySignatureOfASharp,
  KeySignatureOfB,
  KeySignatureOfBb,
  KeySignatureOfBSharp,
  KeySignatureOfC,
  KeySignatureOfCb,
  KeySignatureOfCSharp,
  KeySignatureOfD,
  KeySignatureOfDb,
  KeySignatureOfDSharp,
  KeySignatureOfE,
  KeySignatureOfEb,
  KeySignatureOfESharp,
  KeySignatureOfF,
  KeySignatureOfFb,
  KeySignatureOfFSharp,
  KeySignatureOfG,
  KeySignatureOfGb,
  KeySignatureOfGSharp,
} from './keySignatures';
import { Note } from './note';
import { Octave } from './octave';

type KeySignatureProps =
  | 'C'
  | 'Cb'
  | 'C#'
  | 'D'
  | 'Db'
  | 'D#'
  | 'E'
  | 'Eb'
  | 'E#'
  | 'F'
  | 'Fb'
  | 'F#'
  | 'G'
  | 'Gb'
  | 'G#'
  | 'A'
  | 'Ab'
  | 'A#'
  | 'B'
  | 'Bb'
  | 'B#';

export abstract class KeySignature {
  public static for(key: KeySignatureProps) {
    switch (key) {
      case 'C':
        return new KeySignatureOfC();
      case 'Cb':
        return new KeySignatureOfCb();
      case 'C#':
        return new KeySignatureOfCSharp();
      case 'D':
        return new KeySignatureOfD();
      case 'Db':
        return new KeySignatureOfDb();
      case 'D#':
        return new KeySignatureOfDSharp();
      case 'E':
        return new KeySignatureOfE();
      case 'Eb':
        return new KeySignatureOfEb();
      case 'E#':
        return new KeySignatureOfESharp();
      case 'F':
        return new KeySignatureOfF();
      case 'Fb':
        return new KeySignatureOfFb();
      case 'F#':
        return new KeySignatureOfFSharp();
      case 'G':
        return new KeySignatureOfG();
      case 'Gb':
        return new KeySignatureOfGb();
      case 'G#':
        return new KeySignatureOfGSharp();
      case 'A':
        return new KeySignatureOfA();
      case 'Ab':
        return new KeySignatureOfAb();
      case 'A#':
        return new KeySignatureOfASharp();
      case 'B':
        return new KeySignatureOfB();
      case 'Bb':
        return new KeySignatureOfBb();
      case 'B#':
        return new KeySignatureOfBSharp();
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
