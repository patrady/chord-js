import { KeySignatureOfFb } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfFb, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfFb();

    expect(key.isInKey(new Note('Fb4'))).toBeTruthy();
    expect(key.isInKey(new Note('Gb4'))).toBeTruthy();
    expect(key.isInKey(new Note('Ab4'))).toBeTruthy();
    expect(key.isInKey(new Note('B𝄫4'))).toBeTruthy();
    expect(key.isInKey(new Note('Cb5'))).toBeTruthy();
    expect(key.isInKey(new Note('Db5'))).toBeTruthy();
    expect(key.isInKey(new Note('Eb5'))).toBeTruthy();
    expect(key.isInKey(new Note('Fb5'))).toBeTruthy();

    expect(key.isInKey(new Note('F'))).toBeFalsy();
    expect(key.isInKey(new Note('G'))).toBeFalsy();
    expect(key.isInKey(new Note('A'))).toBeFalsy();
    expect(key.isInKey(new Note('Bb'))).toBeFalsy();
    expect(key.isInKey(new Note('B'))).toBeFalsy();
    expect(key.isInKey(new Note('C'))).toBeFalsy();
    expect(key.isInKey(new Note('D'))).toBeFalsy();
    expect(key.isInKey(new Note('E'))).toBeFalsy();
  });
});
