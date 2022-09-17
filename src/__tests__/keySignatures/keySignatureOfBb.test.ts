import { KeySignatureOfBb } from "../../keySignatures";
import { Note } from "../../note";

describe(KeySignatureOfBb, () => {
    it('returns contains the right notes', () => {
      const key = new KeySignatureOfBb();
  
      expect(key.isInKey(new Note("Bb3"))).toBeTruthy();
      expect(key.isInKey(new Note("C4"))).toBeTruthy();
      expect(key.isInKey(new Note("D4"))).toBeTruthy();
      expect(key.isInKey(new Note("Eb4"))).toBeTruthy();
      expect(key.isInKey(new Note("F4"))).toBeTruthy();
      expect(key.isInKey(new Note("G4"))).toBeTruthy();
      expect(key.isInKey(new Note("A4"))).toBeTruthy();
      expect(key.isInKey(new Note("Bb5"))).toBeTruthy();
  
      expect(key.isInKey(new Note("B"))).toBeFalsy();
      expect(key.isInKey(new Note("Cb"))).toBeFalsy();
      expect(key.isInKey(new Note("Db"))).toBeFalsy();
      expect(key.isInKey(new Note("E"))).toBeFalsy();
      expect(key.isInKey(new Note("Fb"))).toBeFalsy();
      expect(key.isInKey(new Note("Gb"))).toBeFalsy();
      expect(key.isInKey(new Note("Ab"))).toBeFalsy();
    });
  });