import { KeySignatureOfD, KeySignatureOfF } from '../keySignatures';
import { Note } from '../note';

describe('#normalize', () => {
  describe('when the note is an enharmonic in the key', () => {
    it('returns the enharmonic in the key', () => {
      expect(new KeySignatureOfF().normalize(new Note('A#'))).toEqual(new Note('Bb'));
      expect(new KeySignatureOfF().normalize(new Note('A#5'))).toEqual(new Note('Bb5'));
      expect(new KeySignatureOfD().normalize(new Note('A##5'))).toEqual(new Note('B5'));
      expect(new KeySignatureOfD().normalize(new Note('Db5'))).toEqual(new Note('C#5'));
    });
  });

  describe('when the note is out of key', () => {
    it('returns the note', () => {
      expect(new KeySignatureOfF().normalize(new Note('F#'))).toEqual(new Note('F#'));
      expect(new KeySignatureOfD().normalize(new Note('G#5'))).toEqual(new Note('G#5'));
    });
  });
});
