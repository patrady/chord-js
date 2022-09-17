import { KeySignatureOfA } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfA, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfA();

    expect(key.isInKey(new Note("A4"))).toBeTruthy();
    expect(key.isInKey(new Note("B4"))).toBeTruthy();
    expect(key.isInKey(new Note("C#5"))).toBeTruthy();
    expect(key.isInKey(new Note("D5"))).toBeTruthy();
    expect(key.isInKey(new Note("E5"))).toBeTruthy();
    expect(key.isInKey(new Note("F#5"))).toBeTruthy();
    expect(key.isInKey(new Note("G#5"))).toBeTruthy();
    expect(key.isInKey(new Note("A5"))).toBeTruthy();

    expect(key.isInKey(new Note("A#"))).toBeFalsy();
    expect(key.isInKey(new Note("B#"))).toBeFalsy();
    expect(key.isInKey(new Note("C"))).toBeFalsy();
    expect(key.isInKey(new Note("D#"))).toBeFalsy();
    expect(key.isInKey(new Note("E#"))).toBeFalsy();
    expect(key.isInKey(new Note("F"))).toBeFalsy();
    expect(key.isInKey(new Note("G"))).toBeFalsy();
  });
});
