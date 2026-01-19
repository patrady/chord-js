import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfFb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Fb4'),
      new Note('Gb4'),
      new Note('Ab4'),
      new Note('B𝄫4'),
      new Note('Cb5'),
      new Note('Db5'),
      new Note('Eb5'),
      new Note('Fb5'),
    ];
  }
}
