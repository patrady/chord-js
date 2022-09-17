import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfA extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('A4'),
      new Note('B4'),
      new Note('C#5'),
      new Note('D5'),
      new Note('E5'),
      new Note('F#5'),
      new Note('G#5'),
      new Note('A5'),
    ];
  }
}
