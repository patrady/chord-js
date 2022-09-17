import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfD extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('D4'),
      new Note('E4'),
      new Note('F#4'),
      new Note('G4'),
      new Note('A4'),
      new Note('B4'),
      new Note('C#5'),
      new Note('D5'),
    ];
  }
}
