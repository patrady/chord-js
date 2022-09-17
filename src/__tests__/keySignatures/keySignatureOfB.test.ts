import { KeySignatureOfB } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfB, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfB();

    expect(key.isInKey(new Note('B4'))).toBeTruthy();
    expect(key.isInKey(new Note('C#5'))).toBeTruthy();
    expect(key.isInKey(new Note('D#5'))).toBeTruthy();
    expect(key.isInKey(new Note('E5'))).toBeTruthy();
    expect(key.isInKey(new Note('F#5'))).toBeTruthy();
    expect(key.isInKey(new Note('G#5'))).toBeTruthy();
    expect(key.isInKey(new Note('A#5'))).toBeTruthy();
    expect(key.isInKey(new Note('B5'))).toBeTruthy();

    expect(key.isInKey(new Note('B#'))).toBeFalsy();
    expect(key.isInKey(new Note('C'))).toBeFalsy();
    expect(key.isInKey(new Note('D'))).toBeFalsy();
    expect(key.isInKey(new Note('E#'))).toBeFalsy();
    expect(key.isInKey(new Note('F'))).toBeFalsy();
    expect(key.isInKey(new Note('G'))).toBeFalsy();
    expect(key.isInKey(new Note('A'))).toBeFalsy();
  });
});
