import { KeySignatureOfFSharp } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfFSharp, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfFSharp();

    expect(key.isInKey(new Note('F#4'))).toBeTruthy();
    expect(key.isInKey(new Note('G#4'))).toBeTruthy();
    expect(key.isInKey(new Note('A#4'))).toBeTruthy();
    expect(key.isInKey(new Note('B4'))).toBeTruthy();
    expect(key.isInKey(new Note('C#5'))).toBeTruthy();
    expect(key.isInKey(new Note('D#5'))).toBeTruthy();
    expect(key.isInKey(new Note('E#5'))).toBeTruthy();
    expect(key.isInKey(new Note('F#5'))).toBeTruthy();

    expect(key.isInKey(new Note('F'))).toBeFalsy();
    expect(key.isInKey(new Note('G'))).toBeFalsy();
    expect(key.isInKey(new Note('A'))).toBeFalsy();
    expect(key.isInKey(new Note('B#'))).toBeFalsy();
    expect(key.isInKey(new Note('C'))).toBeFalsy();
    expect(key.isInKey(new Note('D'))).toBeFalsy();
    expect(key.isInKey(new Note('E'))).toBeFalsy();
  });
});
