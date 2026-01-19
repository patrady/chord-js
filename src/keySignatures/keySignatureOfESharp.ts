import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfESharp extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('E#4'),
      new Note('F𝄪4'),
      new Note('G𝄪4'),
      new Note('A#4'),
      new Note('B#4'),
      new Note('C𝄪5'),
      new Note('D𝄪5'),
      new Note('E#5'),
    ];
  }
}
