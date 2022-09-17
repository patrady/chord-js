import { KeySignatureOfC } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfC, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfC();

    expect(key.isInKey(new Note("C4"))).toBeTruthy();
    expect(key.isInKey(new Note("D4"))).toBeTruthy();
    expect(key.isInKey(new Note("E4"))).toBeTruthy();
    expect(key.isInKey(new Note("F4"))).toBeTruthy();
    expect(key.isInKey(new Note("G4"))).toBeTruthy();
    expect(key.isInKey(new Note("A4"))).toBeTruthy();
    expect(key.isInKey(new Note("B4"))).toBeTruthy();
    expect(key.isInKey(new Note("C5"))).toBeTruthy();

    expect(key.isInKey(new Note("C#"))).toBeFalsy();
    expect(key.isInKey(new Note("D#"))).toBeFalsy();
    expect(key.isInKey(new Note("E#"))).toBeFalsy();
    expect(key.isInKey(new Note("F#"))).toBeFalsy();
    expect(key.isInKey(new Note("G#"))).toBeFalsy();
    expect(key.isInKey(new Note("A#"))).toBeFalsy();
    expect(key.isInKey(new Note("B#"))).toBeFalsy();
  });
});
