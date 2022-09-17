import { Note } from "../note";
import { BaseKeySignature } from "./baseKeySignature";

export class KeySignatureOfGb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Gb4'),
      new Note('Ab4'),
      new Note('Bb4'),
      new Note('Cb5'),
      new Note('Db5'),
      new Note('Eb5'),
      new Note('F5'),
      new Note('Gb5'),
    ];
  }
}
