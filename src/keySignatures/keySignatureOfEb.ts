import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfEb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Eb4'),
      new Note('F4'),
      new Note('G4'),
      new Note('Ab4'),
      new Note('Bb4'),
      new Note('C5'),
      new Note('D5'),
      new Note('Eb5'),
    ];
  }
}
