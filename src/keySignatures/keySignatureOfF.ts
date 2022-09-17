import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfF extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('F4'),
      new Note('G4'),
      new Note('A4'),
      new Note('Bb4'),
      new Note('C5'),
      new Note('D5'),
      new Note('E5'),
      new Note('F5'),
    ];
  }
}
