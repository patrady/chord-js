import { Note } from "../note";

describe(".for", () => {
  describe("with a valid note", () => {
    it("returns an instance of Note", () => {
      expect(new Note("C")).toBeInstanceOf(Note);
    });
  });

  describe("with an invalid note", () => {
    it("throws an error", () => {
      expect(() => new Note("abc")).toThrow();
      
      expect(() => new Note("C0")).toThrow();
      expect(() => new Note("D0")).toThrow();
      expect(() => new Note("E0")).toThrow();
      expect(() => new Note("F0")).toThrow();
      expect(() => new Note("G0")).toThrow();

      expect(() => new Note("D8")).toThrow();
      expect(() => new Note("E8")).toThrow();
      expect(() => new Note("F8")).toThrow();
      expect(() => new Note("G8")).toThrow();
      expect(() => new Note("A8")).toThrow();
      expect(() => new Note("B8")).toThrow();
    });
  });
});

describe("#getKeyNumber", () => {
  it("returns the key number", () => {
    expect(new Note("A0").getKeyNumber()).toEqual(1);
    expect(new Note("B0").getKeyNumber()).toEqual(3);

    expect(new Note("C1").getKeyNumber()).toEqual(4);
    expect(new Note("D1").getKeyNumber()).toEqual(6);
    expect(new Note("E1").getKeyNumber()).toEqual(8);
    expect(new Note("F1").getKeyNumber()).toEqual(9);
    expect(new Note("G1").getKeyNumber()).toEqual(11);
    expect(new Note("A1").getKeyNumber()).toEqual(13);
    expect(new Note("B1").getKeyNumber()).toEqual(15);

    expect(new Note("C2").getKeyNumber()).toEqual(16);
    expect(new Note("D3").getKeyNumber()).toEqual(30);
    expect(new Note("E4").getKeyNumber()).toEqual(44);
    expect(new Note("F5").getKeyNumber()).toEqual(57);
    expect(new Note("G6").getKeyNumber()).toEqual(71);
    expect(new Note("A7").getKeyNumber()).toEqual(85);
  });
});

describe("#getMidiValue", () => {
  it("returns the MIDI value", () => {
    expect(new Note("A0").getMidiValue()).toEqual(21);
    expect(new Note("B0").getMidiValue()).toEqual(23);

    expect(new Note("C1").getMidiValue()).toEqual(24);
    expect(new Note("D1").getMidiValue()).toEqual(26);
    expect(new Note("E1").getMidiValue()).toEqual(28);
    expect(new Note("F1").getMidiValue()).toEqual(29);
    expect(new Note("G1").getMidiValue()).toEqual(31);
    expect(new Note("A1").getMidiValue()).toEqual(33);
    expect(new Note("B1").getMidiValue()).toEqual(35);

    expect(new Note("C2").getMidiValue()).toEqual(36);
    expect(new Note("D3").getMidiValue()).toEqual(50);
    expect(new Note("E4").getMidiValue()).toEqual(64);
    expect(new Note("F5").getMidiValue()).toEqual(77);
    expect(new Note("G6").getMidiValue()).toEqual(91);
    expect(new Note("A7").getMidiValue()).toEqual(105);
  });
});

describe("#getOctave", () => {
  describe("with an octave", () => {
    it("returns that octave", () => {
      expect(new Note("A0").getOctave()).toEqual(0);
      expect(new Note("C1").getOctave()).toEqual(1);
      expect(new Note("D2").getOctave()).toEqual(2);
      expect(new Note("E3").getOctave()).toEqual(3);
      expect(new Note("F4").getOctave()).toEqual(4);
      expect(new Note("G5").getOctave()).toEqual(5);
      expect(new Note("A6").getOctave()).toEqual(6);
      expect(new Note("B7").getOctave()).toEqual(7);
    });
  });

  describe("without an octave", () => {
    it("returns the middle octave", () => {
      expect(new Note("C").getOctave()).toEqual(4);
      expect(new Note("D").getOctave()).toEqual(4);
      expect(new Note("E").getOctave()).toEqual(4);
      expect(new Note("F").getOctave()).toEqual(4);
      expect(new Note("G").getOctave()).toEqual(4);
      expect(new Note("A").getOctave()).toEqual(4);
      expect(new Note("B").getOctave()).toEqual(4);
    });
  });
});

describe("#getScientificName", () => {
  it("returns the note name and octave", () => {
    expect(new Note("C").getScientificName()).toEqual("C4");
    expect(new Note("D").getScientificName()).toEqual("D4");
    expect(new Note("E").getScientificName()).toEqual("E4");
    expect(new Note("F").getScientificName()).toEqual("F4");
    expect(new Note("G").getScientificName()).toEqual("G4");
    expect(new Note("A").getScientificName()).toEqual("A4");
    expect(new Note("B").getScientificName()).toEqual("B4");

    expect(new Note("A0").getScientificName()).toEqual("A0");
    expect(new Note("C1").getScientificName()).toEqual("C1");
    expect(new Note("D2").getScientificName()).toEqual("D2");
    expect(new Note("E3").getScientificName()).toEqual("E3");
    expect(new Note("F4").getScientificName()).toEqual("F4");
    expect(new Note("G5").getScientificName()).toEqual("G5");
    expect(new Note("A6").getScientificName()).toEqual("A6");
    expect(new Note("B7").getScientificName()).toEqual("B7");
  });
});

describe("#getName", () => {
  it("returns the name of the note", () => {
    expect(new Note("C").getName()).toEqual("C");
    expect(new Note("D").getName()).toEqual("D");
    expect(new Note("E").getName()).toEqual("E");
    expect(new Note("F").getName()).toEqual("F");
    expect(new Note("G").getName()).toEqual("G");
    expect(new Note("A").getName()).toEqual("A");
    expect(new Note("B").getName()).toEqual("B");

    expect(new Note("A0").getName()).toEqual("A");
    expect(new Note("C1").getName()).toEqual("C");
    expect(new Note("D2").getName()).toEqual("D");
    expect(new Note("E3").getName()).toEqual("E");
    expect(new Note("F4").getName()).toEqual("F");
    expect(new Note("G5").getName()).toEqual("G");
    expect(new Note("A6").getName()).toEqual("A");
    expect(new Note("B7").getName()).toEqual("B");
  });
});

describe("#getFrequency", () => {
  it("returns the frequency", () => {
    expect(new Note("A0").getFrequency()).toEqual(27.5);
    expect(new Note("B0").getFrequency()).toEqual(30.86771);
    expect(new Note("C1").getFrequency()).toEqual(32.7032);
    expect(new Note("D2").getFrequency()).toEqual(73.41619);
    expect(new Note("E3").getFrequency()).toEqual(164.81378);
    expect(new Note("F4").getFrequency()).toEqual(349.22823);
    expect(new Note("A4").getFrequency()).toEqual(440.0);
    expect(new Note("G5").getFrequency()).toEqual(783.99087);
    expect(new Note("A6").getFrequency()).toEqual(1760.0);
    expect(new Note("B7").getFrequency()).toEqual(3951.06641);
  });
});
