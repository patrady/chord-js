import { KeySignatureOfEb } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfEb, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfEb();

    expect(key.isInKey(new Note("Eb4"))).toBeTruthy();
    expect(key.isInKey(new Note("F4"))).toBeTruthy();
    expect(key.isInKey(new Note("G4"))).toBeTruthy();
    expect(key.isInKey(new Note("Ab4"))).toBeTruthy();
    expect(key.isInKey(new Note("Bb4"))).toBeTruthy();
    expect(key.isInKey(new Note("C5"))).toBeTruthy();
    expect(key.isInKey(new Note("D5"))).toBeTruthy();
    expect(key.isInKey(new Note("Eb5"))).toBeTruthy();

    expect(key.isInKey(new Note("E"))).toBeFalsy();
    expect(key.isInKey(new Note("Fb"))).toBeFalsy();
    expect(key.isInKey(new Note("Gb"))).toBeFalsy();
    expect(key.isInKey(new Note("A"))).toBeFalsy();
    expect(key.isInKey(new Note("B"))).toBeFalsy();
    expect(key.isInKey(new Note("Cb"))).toBeFalsy();
    expect(key.isInKey(new Note("Db"))).toBeFalsy();
  });
});
