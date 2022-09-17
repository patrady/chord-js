import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfDb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Db4'),
      new Note('Eb4'),
      new Note('F4'),
      new Note('Gb4'),
      new Note('Ab4'),
      new Note('Bb4'),
      new Note('C5'),
      new Note('Db5'),
    ];
  }
}
