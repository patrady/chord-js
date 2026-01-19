import { KeySignatureOfCSharp } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfCSharp, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfCSharp();

    expect(key.isInKey(new Note('C#4'))).toBeTruthy();
    expect(key.isInKey(new Note('D#4'))).toBeTruthy();
    expect(key.isInKey(new Note('E#4'))).toBeTruthy();
    expect(key.isInKey(new Note('F#4'))).toBeTruthy();
    expect(key.isInKey(new Note('G#4'))).toBeTruthy();
    expect(key.isInKey(new Note('A#4'))).toBeTruthy();
    expect(key.isInKey(new Note('B#4'))).toBeTruthy();
    expect(key.isInKey(new Note('C#5'))).toBeTruthy();

    expect(key.isInKey(new Note('C'))).toBeFalsy();
    expect(key.isInKey(new Note('D'))).toBeFalsy();
    expect(key.isInKey(new Note('E'))).toBeFalsy();
    expect(key.isInKey(new Note('F'))).toBeFalsy();
    expect(key.isInKey(new Note('G'))).toBeFalsy();
    expect(key.isInKey(new Note('A'))).toBeFalsy();
    expect(key.isInKey(new Note('B'))).toBeFalsy();
  });
});
