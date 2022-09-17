import { KeySignatureOfE } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfE, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfE();

    expect(key.isInKey(new Note("E4"))).toBeTruthy();
    expect(key.isInKey(new Note("F#4"))).toBeTruthy();
    expect(key.isInKey(new Note("G#4"))).toBeTruthy();
    expect(key.isInKey(new Note("A4"))).toBeTruthy();
    expect(key.isInKey(new Note("B4"))).toBeTruthy();
    expect(key.isInKey(new Note("C#5"))).toBeTruthy();
    expect(key.isInKey(new Note("D#5"))).toBeTruthy();
    expect(key.isInKey(new Note("E5"))).toBeTruthy();

    expect(key.isInKey(new Note("E#"))).toBeFalsy();
    expect(key.isInKey(new Note("F"))).toBeFalsy();
    expect(key.isInKey(new Note("G"))).toBeFalsy();
    expect(key.isInKey(new Note("A#"))).toBeFalsy();
    expect(key.isInKey(new Note("B#"))).toBeFalsy();
    expect(key.isInKey(new Note("C"))).toBeFalsy();
    expect(key.isInKey(new Note("D"))).toBeFalsy();
  });
});
