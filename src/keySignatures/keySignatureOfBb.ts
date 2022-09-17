import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfBb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Bb3'),
      new Note('C4'),
      new Note('D4'),
      new Note('Eb4'),
      new Note('F4'),
      new Note('G4'),
      new Note('A4'),
      new Note('Bb4'),
    ];
  }
}
