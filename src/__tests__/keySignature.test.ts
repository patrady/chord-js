import { KeySignatureOfC, KeySignatureOfD, KeySignatureOfF } from '../keySignatures';
import { Note } from '../note';

describe('#normalize', () => {
  describe('when the note is an enharmonic in the key', () => {
    it('returns the enharmonic in the key', () => {
      expect(new KeySignatureOfF().normalize(new Note('A#')).equals(new Note('Bb'))).toBeTruthy();
      expect(new KeySignatureOfF().normalize(new Note('A#5')).equals(new Note('Bb5'))).toBeTruthy();
      expect(new KeySignatureOfD().normalize(new Note('A##5')).equals(new Note('B5'))).toBeTruthy();
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
