import { Note } from "../note";
import { BaseKeySignature } from "./baseKeySignature";

export class KeySignatureOfB extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('B4'),
      new Note('C#5'),
      new Note('D#5'),
      new Note('E5'),
      new Note('F#5'),
      new Note('G#5'),
      new Note('A#5'),
      new Note('B5'),
    ];
  }
}
