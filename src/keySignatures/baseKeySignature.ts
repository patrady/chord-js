import { BaseChord } from '../chords';
import { Interval } from '../interval';
import { Note } from '../note';
import { Octave } from '../octave';

type Degrees = 'tonic' | 'supertonic' | 'mediant' | 'subdominant' | 'dominant' | 'submediant' | 'leading-tone';

export abstract class BaseKeySignature {
  public abstract getNotes(): Note[];

  public root() {
    return this.getNotes()[0];
  }

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

  public getDegree(chord: BaseChord | undefined): undefined | Degrees {
    if (!chord) {
      return undefined;
    }

    const semitones = Interval.between(this.root(), chord.root()).getSemitones();

    switch (semitones) {
      case Interval.isNone():
      case Interval.octave():
        return 'tonic';
      case Interval.major2nd():
        return 'supertonic';
      case Interval.major3rd():
        return 'mediant';
      case Interval.perfect4th():
        return 'subdominant';
      case Interval.perfect5th():
        return 'dominant';
      case Interval.major6th():
        return 'submediant';
      case Interval.major7th():
        return 'leading-tone';
      default:
        undefined;
    }
  }
}
