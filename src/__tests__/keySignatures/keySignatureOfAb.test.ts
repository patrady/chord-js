import { KeySignatureOfAb } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfAb, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfAb();

    expect(key.isInKey(new Note("Ab4"))).toBeTruthy();
    expect(key.isInKey(new Note("Bb4"))).toBeTruthy();
    expect(key.isInKey(new Note("C5"))).toBeTruthy();
    expect(key.isInKey(new Note("Db5"))).toBeTruthy();
    expect(key.isInKey(new Note("Eb5"))).toBeTruthy();
    expect(key.isInKey(new Note("F5"))).toBeTruthy();
    expect(key.isInKey(new Note("G5"))).toBeTruthy();
    expect(key.isInKey(new Note("Ab5"))).toBeTruthy();

    expect(key.isInKey(new Note("A"))).toBeFalsy();
    expect(key.isInKey(new Note("B"))).toBeFalsy();
    expect(key.isInKey(new Note("Cb"))).toBeFalsy();
    expect(key.isInKey(new Note("D"))).toBeFalsy();
    expect(key.isInKey(new Note("E"))).toBeFalsy();
    expect(key.isInKey(new Note("Fb"))).toBeFalsy();
    expect(key.isInKey(new Note("Gb"))).toBeFalsy();
  });
});
