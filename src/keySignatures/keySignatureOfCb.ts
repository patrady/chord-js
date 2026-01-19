import { Note } from '../note';
import { BaseKeySignature } from './baseKeySignature';

export class KeySignatureOfCb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Cb4'),
      new Note('Db4'),
      new Note('Eb4'),
      new Note('Fb4'),
      new Note('Gb4'),
      new Note('Ab4'),
      new Note('Bb4'),
      new Note('Cb5'),
    ];
  }
}
