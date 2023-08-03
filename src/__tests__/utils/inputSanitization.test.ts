import { Note } from '../../note';
import { InputSanitization } from '../../utils';

describe('#call', () => {
  describe('with a string', () => {
    it('converts the string to an array of notes', () => {
      expect(new InputSanitization('C E G').call()).toEqual([new Note('C'), new Note('E'), new Note('G')]);
    });
  });

  describe('with an array of Notes', () => {
    it('returns the array of notes', () => {
      const C = Note.fromMidi(60);
      const E = Note.fromMidi(64);
      const G = Note.fromMidi(67);

      expect(new InputSanitization([C, E, G]).call()).toEqual([C, E, G]);
    });
  });

  describe('when some notes are duplicated', () => {
    it('removes the duplications', () => {
      expect(new InputSanitization('C E G C').call()).toEqual([new Note('C'), new Note('E'), new Note('G')]);
      expect(new InputSanitization('D F# A F#').call()).toEqual([new Note('D'), new Note('F#'), new Note('A')]);
      expect(new InputSanitization('D4 F#5 A6 D4 F#5 A6').call()).toEqual([
        new Note('D4'),
        new Note('F#5'),
        new Note('A6'),
      ]);
    });
  });

  describe('when some notes the same letter but in different octaves', () => {
    it('keeps note with the lowest octave', () => {
      expect(new InputSanitization('A2 D4 F#5 D5 F#4 A6').call()).toEqual([
        new Note('A2'),
        new Note('D4'),
        new Note('F#4'),
      ]);
    });
  });

  describe('when the notes are not sorted by MIDI value', () => {
    it('sorts the notes by MIDI value', () => {
      expect(new InputSanitization('C5 B4 A4 G4 F4 E4 D4').call()).toEqual([
        new Note('D4'),
        new Note('E4'),
        new Note('F4'),
        new Note('G4'),
        new Note('A4'),
        new Note('B4'),
        new Note('C5'),
      ]);
    });
  });
});
