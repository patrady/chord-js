import { Chord } from '../chord';
import { KeySignatureOfC, KeySignatureOfD, KeySignatureOfF } from '../keySignatures';
import { Note } from '../note';

describe('#normalize', () => {
  describe('when the note is an enharmonic in the key', () => {
    it('returns the enharmonic in the key', () => {
      expect(new KeySignatureOfF().normalize(new Note('A#')).equals(new Note('Bb'))).toBeTruthy();
      expect(new KeySignatureOfF().normalize(new Note('A#5')).equals(new Note('Bb5'))).toBeTruthy();
      expect(new KeySignatureOfD().normalize(new Note('A𝄪5')).equals(new Note('B5'))).toBeTruthy();
      expect(new KeySignatureOfD().normalize(new Note('Db5')).equals(new Note('C#5'))).toBeTruthy();
    });
  });

  describe('when the note is out of key', () => {
    it('returns the note', () => {
      expect(new KeySignatureOfF().normalize(new Note('F#')).equals(new Note('F#'))).toBeTruthy();
      expect(new KeySignatureOfD().normalize(new Note('G#5')).equals(new Note('G#5'))).toBeTruthy();
    });
  });
});

describe('#isInKey', () => {
  describe('when the note is in the key', () => {
    it('returns true', () => {
      expect(new KeySignatureOfC().isInKey(new Note('C'))).toBeTruthy();
    });
  });

  describe('when the note is not in the key', () => {
    it('returns false', () => {
      expect(new KeySignatureOfC().isInKey(new Note('C#'))).toBeFalsy();
    });
  });
});

describe('#getDegree', () => {
  describe('when the tonic', () => {
    it('returns tonic', () => {
      const cMajor = Chord.for('C E G');
      const cMajorOctaveHigher = Chord.for('C5 E5 G5');

      expect(new KeySignatureOfC().getDegree(cMajor)).toEqual("tonic");
      expect(new KeySignatureOfC().getDegree(cMajorOctaveHigher)).toEqual("tonic");
    });
  });

  describe('when the supertonic', () => {
    it('returns supertonic', () => {
      const dMinor = Chord.for('D F A');

      expect(new KeySignatureOfC().getDegree(dMinor)).toEqual("supertonic");
    });
  });

  describe('when the mediant', () => {
    it('returns mediant', () => {
      const eMinor = Chord.for('E G B');

      expect(new KeySignatureOfC().getDegree(eMinor)).toEqual("mediant");
    });
  });

  describe('when the subdominant', () => {
    it('returns subdominant', () => {
      const fMajor = Chord.for('F A C');

      expect(new KeySignatureOfC().getDegree(fMajor)).toEqual("subdominant");
    });
  });

  describe('when the dominant', () => {
    it('returns dominant', () => {
      const gMajor = Chord.for('G B D');

      expect(new KeySignatureOfC().getDegree(gMajor)).toEqual("dominant");
    });
  });

  describe('when the submediant', () => {
    it('returns submediant', () => {
      const aMinor = Chord.for('A C E');

      expect(new KeySignatureOfC().getDegree(aMinor)).toEqual("submediant");
    });
  });

  describe('when the leading-tone', () => {
    it('returns leading-tone', () => {
      const bMinor = Chord.for('B D F');

      expect(new KeySignatureOfC().getDegree(bMinor)).toEqual("leading-tone");
    });
  });

  describe('with an invalid chord', () => {
    it('returns undefined', () => {
      const invalidChord = Chord.for('C E F');

      expect(new KeySignatureOfC().getDegree(invalidChord)).toBeUndefined();
    });
  });
});
