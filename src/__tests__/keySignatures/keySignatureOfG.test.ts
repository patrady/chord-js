import { KeySignatureOfG } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfG, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfG();

    expect(key.isInKey(new Note("G4"))).toBeTruthy();
    expect(key.isInKey(new Note("A4"))).toBeTruthy();
    expect(key.isInKey(new Note("B4"))).toBeTruthy();
    expect(key.isInKey(new Note("C5"))).toBeTruthy();
    expect(key.isInKey(new Note("D5"))).toBeTruthy();
    expect(key.isInKey(new Note("E5"))).toBeTruthy();
    expect(key.isInKey(new Note("F#5"))).toBeTruthy();
    expect(key.isInKey(new Note("G5"))).toBeTruthy();

    expect(key.isInKey(new Note("G#"))).toBeFalsy();
    expect(key.isInKey(new Note("A#"))).toBeFalsy();
    expect(key.isInKey(new Note("B#"))).toBeFalsy();
    expect(key.isInKey(new Note("C#"))).toBeFalsy();
    expect(key.isInKey(new Note("D#"))).toBeFalsy();
    expect(key.isInKey(new Note("E#"))).toBeFalsy();
    expect(key.isInKey(new Note("F"))).toBeFalsy();
  });
});
