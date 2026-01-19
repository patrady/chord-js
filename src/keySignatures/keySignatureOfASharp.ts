import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfASharp extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('A#4'),
      new Note('B#4'),
      new Note('C𝄪5'),
      new Note('D#5'),
      new Note('E#5'),
      new Note('F𝄪5'),
      new Note('G𝄪5'),
      new Note('A#5'),
    ];
  }
}
