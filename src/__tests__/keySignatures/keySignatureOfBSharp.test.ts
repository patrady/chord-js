import { KeySignatureOfBSharp } from '../../keySignatures';
import { Note } from '../../note';

describe(KeySignatureOfBSharp, () => {
  it('returns contains the right notes', () => {
    const key = new KeySignatureOfBSharp();

    expect(key.isInKey(new Note('B#4'))).toBeTruthy();
    expect(key.isInKey(new Note('C𝄪5'))).toBeTruthy();
    expect(key.isInKey(new Note('D𝄪5'))).toBeTruthy();
    expect(key.isInKey(new Note('E#5'))).toBeTruthy();
    expect(key.isInKey(new Note('F𝄪5'))).toBeTruthy();
    expect(key.isInKey(new Note('G𝄪5'))).toBeTruthy();
    expect(key.isInKey(new Note('A𝄪5'))).toBeTruthy();
    expect(key.isInKey(new Note('B#5'))).toBeTruthy();

    expect(key.isInKey(new Note('B'))).toBeFalsy();
    expect(key.isInKey(new Note('C'))).toBeFalsy();
    expect(key.isInKey(new Note('C#'))).toBeFalsy();
    expect(key.isInKey(new Note('D'))).toBeFalsy();
    expect(key.isInKey(new Note('D#'))).toBeFalsy();
    expect(key.isInKey(new Note('E'))).toBeFalsy();
    expect(key.isInKey(new Note('F'))).toBeFalsy();
    expect(key.isInKey(new Note('F#'))).toBeFalsy();
    expect(key.isInKey(new Note('G'))).toBeFalsy();
    expect(key.isInKey(new Note('G#'))).toBeFalsy();
    expect(key.isInKey(new Note('A'))).toBeFalsy();
    expect(key.isInKey(new Note('A#'))).toBeFalsy();
  });
});
