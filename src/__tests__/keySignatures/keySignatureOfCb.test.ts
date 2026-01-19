import { KeySignatureOfCb } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfCb, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfCb();

    expect(key.isInKey(new Note('Cb4'))).toBeTruthy();
    expect(key.isInKey(new Note('Db4'))).toBeTruthy();
    expect(key.isInKey(new Note('Eb4'))).toBeTruthy();
    expect(key.isInKey(new Note('Fb4'))).toBeTruthy();
    expect(key.isInKey(new Note('Gb4'))).toBeTruthy();
    expect(key.isInKey(new Note('Ab4'))).toBeTruthy();
    expect(key.isInKey(new Note('Bb4'))).toBeTruthy();
    expect(key.isInKey(new Note('Cb5'))).toBeTruthy();

    expect(key.isInKey(new Note('C'))).toBeFalsy();
    expect(key.isInKey(new Note('D'))).toBeFalsy();
    expect(key.isInKey(new Note('E'))).toBeFalsy();
    expect(key.isInKey(new Note('F'))).toBeFalsy();
    expect(key.isInKey(new Note('G'))).toBeFalsy();
    expect(key.isInKey(new Note('A'))).toBeFalsy();
    expect(key.isInKey(new Note('B'))).toBeFalsy();
  });
});
