import { Note } from "../note";
import { Octave } from "../octave";

export abstract class BaseKeySignature {
  public abstract getNotes(): Note[];

  public normalize(note: Note) {
    for (const keyNote of this.getNotes()) {
      for (const octave of Octave.all()) {
        const noteWithDifferentOctave = keyNote.setOctave(octave);

        if (noteWithDifferentOctave.matches(note)) {
          return noteWithDifferentOctave;
        }
      }
    }

    return note;
  }

  public isInKey(note: Note) {
    for (const keyNote of this.getNotes()) {
      for (const octave of Octave.all()) {
        if (keyNote.setOctave(octave).equals(note)) {
          return true;
        }
      }
    }

    return false;
  }
}
