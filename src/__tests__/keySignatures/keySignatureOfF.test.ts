import { KeySignatureOfF } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfF, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfF();

    expect(key.isInKey(new Note('F4'))).toBeTruthy();
    expect(key.isInKey(new Note('G4'))).toBeTruthy();
    expect(key.isInKey(new Note('A4'))).toBeTruthy();
    expect(key.isInKey(new Note('Bb4'))).toBeTruthy();
    expect(key.isInKey(new Note('C5'))).toBeTruthy();
    expect(key.isInKey(new Note('D5'))).toBeTruthy();
    expect(key.isInKey(new Note('E5'))).toBeTruthy();
    expect(key.isInKey(new Note('F5'))).toBeTruthy();

    expect(key.isInKey(new Note('Fb'))).toBeFalsy();
    expect(key.isInKey(new Note('Gb'))).toBeFalsy();
    expect(key.isInKey(new Note('Ab'))).toBeFalsy();
    expect(key.isInKey(new Note('B'))).toBeFalsy();
    expect(key.isInKey(new Note('Cb'))).toBeFalsy();
    expect(key.isInKey(new Note('Db'))).toBeFalsy();
    expect(key.isInKey(new Note('Eb'))).toBeFalsy();
  });
});
