import { KeySignatureOfD } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfD, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfD();

    expect(key.isInKey(new Note('D4'))).toBeTruthy();
    expect(key.isInKey(new Note('E4'))).toBeTruthy();
    expect(key.isInKey(new Note('F#4'))).toBeTruthy();
    expect(key.isInKey(new Note('G4'))).toBeTruthy();
    expect(key.isInKey(new Note('A4'))).toBeTruthy();
    expect(key.isInKey(new Note('B4'))).toBeTruthy();
    expect(key.isInKey(new Note('C#5'))).toBeTruthy();
    expect(key.isInKey(new Note('D5'))).toBeTruthy();

    expect(key.isInKey(new Note('D#'))).toBeFalsy();
    expect(key.isInKey(new Note('E#'))).toBeFalsy();
    expect(key.isInKey(new Note('F'))).toBeFalsy();
    expect(key.isInKey(new Note('G#'))).toBeFalsy();
    expect(key.isInKey(new Note('A#'))).toBeFalsy();
    expect(key.isInKey(new Note('B#'))).toBeFalsy();
    expect(key.isInKey(new Note('C'))).toBeFalsy();
  });
});
