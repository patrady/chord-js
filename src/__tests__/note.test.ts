import { Note } from "../note";

describe("#constructor", () => {
  describe("with a valid note", () => {
    it("returns an instance of Note", () => {
      expect(new Note("C")).toBeInstanceOf(Note);

      expect(new Note("C#")).toBeInstanceOf(Note);
      expect(new Note("Cb")).toBeInstanceOf(Note);
      expect(new Note("C♮")).toBeInstanceOf(Note);
      
      expect(new Note("C#8")).toBeInstanceOf(Note);
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
    expect(new Note("A#0").getKeyNumber()).toEqual(2);
    expect(new Note("Bb0").getKeyNumber()).toEqual(2);
    expect(new Note("B0").getKeyNumber()).toEqual(3);

    expect(new Note("C1").getKeyNumber()).toEqual(4);
    expect(new Note("C#1").getKeyNumber()).toEqual(5);
    expect(new Note("Db1").getKeyNumber()).toEqual(5);
    expect(new Note("D1").getKeyNumber()).toEqual(6);
    expect(new Note("D#1").getKeyNumber()).toEqual(7);
    expect(new Note("Eb1").getKeyNumber()).toEqual(7);
    expect(new Note("E1").getKeyNumber()).toEqual(8);
    expect(new Note("E#1").getKeyNumber()).toEqual(9);
    expect(new Note("F1").getKeyNumber()).toEqual(9);
    expect(new Note("F#1").getKeyNumber()).toEqual(10);
    expect(new Note("Gb1").getKeyNumber()).toEqual(10);
    expect(new Note("G1").getKeyNumber()).toEqual(11);
    expect(new Note("G#1").getKeyNumber()).toEqual(12);
    expect(new Note("Ab1").getKeyNumber()).toEqual(12);
    expect(new Note("A1").getKeyNumber()).toEqual(13);
    expect(new Note("A#1").getKeyNumber()).toEqual(14);
    expect(new Note("Bb1").getKeyNumber()).toEqual(14);
    expect(new Note("B1").getKeyNumber()).toEqual(15);

    expect(new Note("C2").getKeyNumber()).toEqual(16);
    expect(new Note("C#2").getKeyNumber()).toEqual(17);
    expect(new Note("D3").getKeyNumber()).toEqual(30);
    expect(new Note("D#3").getKeyNumber()).toEqual(31);
    expect(new Note("E4").getKeyNumber()).toEqual(44);
    expect(new Note("F5").getKeyNumber()).toEqual(57);
    expect(new Note("F#5").getKeyNumber()).toEqual(58);
    expect(new Note("G6").getKeyNumber()).toEqual(71);
    expect(new Note("G#6").getKeyNumber()).toEqual(72);
    expect(new Note("A7").getKeyNumber()).toEqual(85);
    expect(new Note("A#7").getKeyNumber()).toEqual(86);
  });
});

describe("#getMidiValue", () => {
  it("returns the MIDI value", () => {
    expect(new Note("A0").getMidiValue()).toEqual(21);
    expect(new Note("A#0").getMidiValue()).toEqual(22);
    expect(new Note("Bb0").getMidiValue()).toEqual(22);
    expect(new Note("B0").getMidiValue()).toEqual(23);
    expect(new Note("B#0").getMidiValue()).toEqual(24);

    expect(new Note("C1").getMidiValue()).toEqual(24);
    expect(new Note("C#1").getMidiValue()).toEqual(25);
    expect(new Note("Db1").getMidiValue()).toEqual(25);
    expect(new Note("D1").getMidiValue()).toEqual(26);
    expect(new Note("D#1").getMidiValue()).toEqual(27);
    expect(new Note("Eb1").getMidiValue()).toEqual(27);
    expect(new Note("E1").getMidiValue()).toEqual(28);
    expect(new Note("Fb1").getMidiValue()).toEqual(28);
    expect(new Note("E#1").getMidiValue()).toEqual(29);
    expect(new Note("F1").getMidiValue()).toEqual(29);
    expect(new Note("F#1").getMidiValue()).toEqual(30);
    expect(new Note("Gb1").getMidiValue()).toEqual(30);
    expect(new Note("G1").getMidiValue()).toEqual(31);
    expect(new Note("G#1").getMidiValue()).toEqual(32);
    expect(new Note("Ab1").getMidiValue()).toEqual(32);
    expect(new Note("A1").getMidiValue()).toEqual(33);
    expect(new Note("A#1").getMidiValue()).toEqual(34);
    expect(new Note("Bb1").getMidiValue()).toEqual(34);
    expect(new Note("B1").getMidiValue()).toEqual(35);
    expect(new Note("B#1").getMidiValue()).toEqual(36);

    expect(new Note("C2").getMidiValue()).toEqual(36);
    expect(new Note("C#2").getMidiValue()).toEqual(37);
    expect(new Note("Db3").getMidiValue()).toEqual(49);
    expect(new Note("D3").getMidiValue()).toEqual(50);
    expect(new Note("Eb4").getMidiValue()).toEqual(63);
    expect(new Note("E4").getMidiValue()).toEqual(64);
    expect(new Note("F5").getMidiValue()).toEqual(77);
    expect(new Note("F#5").getMidiValue()).toEqual(78);
    expect(new Note("Gb6").getMidiValue()).toEqual(90);
    expect(new Note("G6").getMidiValue()).toEqual(91);
    expect(new Note("Ab7").getMidiValue()).toEqual(104);
    expect(new Note("A7").getMidiValue()).toEqual(105);
  });
});

describe("#getOctave", () => {
  describe("with an octave", () => {
    it("returns that octave", () => {
      expect(new Note("A0").getOctave()).toEqual(0);
      expect(new Note("Bb0").getOctave()).toEqual(0);
      expect(new Note("C1").getOctave()).toEqual(1);
      expect(new Note("C#1").getOctave()).toEqual(1);
      expect(new Note("D2").getOctave()).toEqual(2);
      expect(new Note("Db2").getOctave()).toEqual(2);
      expect(new Note("E3").getOctave()).toEqual(3);
      expect(new Note("Eb3").getOctave()).toEqual(3);
      expect(new Note("F4").getOctave()).toEqual(4);
      expect(new Note("F#4").getOctave()).toEqual(4);
      expect(new Note("G5").getOctave()).toEqual(5);
      expect(new Note("Gb5").getOctave()).toEqual(5);
      expect(new Note("A6").getOctave()).toEqual(6);
      expect(new Note("Ab6").getOctave()).toEqual(6);
      expect(new Note("B7").getOctave()).toEqual(7);
      expect(new Note("Bb7").getOctave()).toEqual(7);
    });
  });

  describe("without an octave", () => {
    it("returns the middle octave", () => {
      expect(new Note("C").getOctave()).toEqual(4);
      expect(new Note("C#").getOctave()).toEqual(4);
      expect(new Note("D").getOctave()).toEqual(4);
      expect(new Note("Db").getOctave()).toEqual(4);
      expect(new Note("E").getOctave()).toEqual(4);
      expect(new Note("Eb").getOctave()).toEqual(4);
      expect(new Note("F").getOctave()).toEqual(4);
      expect(new Note("F#").getOctave()).toEqual(4);
      expect(new Note("G").getOctave()).toEqual(4);
      expect(new Note("G#").getOctave()).toEqual(4);
      expect(new Note("A").getOctave()).toEqual(4);
      expect(new Note("Ab").getOctave()).toEqual(4);
      expect(new Note("B").getOctave()).toEqual(4);
      expect(new Note("Bb").getOctave()).toEqual(4);
    });
  });
});

describe("#getScientificName", () => {
  it("returns the note name and octave", () => {
    expect(new Note("C").getScientificName()).toEqual("C4");
    expect(new Note("C#").getScientificName()).toEqual("C#4");
    expect(new Note("Db").getScientificName()).toEqual("Db4");
    expect(new Note("D").getScientificName()).toEqual("D4");
    expect(new Note("D#").getScientificName()).toEqual("D#4");
    expect(new Note("Eb").getScientificName()).toEqual("Eb4");
    expect(new Note("E").getScientificName()).toEqual("E4");
    expect(new Note("E#").getScientificName()).toEqual("E#4");
    expect(new Note("Fb").getScientificName()).toEqual("Fb4");
    expect(new Note("F").getScientificName()).toEqual("F4");
    expect(new Note("F#").getScientificName()).toEqual("F#4");
    expect(new Note("Gb").getScientificName()).toEqual("Gb4");
    expect(new Note("G").getScientificName()).toEqual("G4");
    expect(new Note("G#").getScientificName()).toEqual("G#4");
    expect(new Note("Ab").getScientificName()).toEqual("Ab4");
    expect(new Note("A").getScientificName()).toEqual("A4");
    expect(new Note("A#").getScientificName()).toEqual("A#4");
    expect(new Note("Bb").getScientificName()).toEqual("Bb4");
    expect(new Note("B").getScientificName()).toEqual("B4");
    expect(new Note("B#").getScientificName()).toEqual("B#4");

    expect(new Note("A0").getScientificName()).toEqual("A0");
    expect(new Note("A#0").getScientificName()).toEqual("A#0");
    expect(new Note("C1").getScientificName()).toEqual("C1");
    expect(new Note("C#1").getScientificName()).toEqual("C#1");
    expect(new Note("D2").getScientificName()).toEqual("D2");
    expect(new Note("Db2").getScientificName()).toEqual("Db2");
    expect(new Note("E3").getScientificName()).toEqual("E3");
    expect(new Note("Eb3").getScientificName()).toEqual("Eb3");
    expect(new Note("F4").getScientificName()).toEqual("F4");
    expect(new Note("F#4").getScientificName()).toEqual("F#4");
    expect(new Note("G5").getScientificName()).toEqual("G5");
    expect(new Note("Gb5").getScientificName()).toEqual("Gb5");
    expect(new Note("A6").getScientificName()).toEqual("A6");
    expect(new Note("A#6").getScientificName()).toEqual("A#6");
    expect(new Note("B7").getScientificName()).toEqual("B7");
    expect(new Note("Bb7").getScientificName()).toEqual("Bb7");
  });
});

describe("#getName", () => {
  it("returns the name of the note", () => {
    expect(new Note("C").getName()).toEqual("C");
    expect(new Note("C#").getName()).toEqual("C#");
    expect(new Note("Db").getName()).toEqual("Db");
    expect(new Note("D").getName()).toEqual("D");
    expect(new Note("D#").getName()).toEqual("D#");
    expect(new Note("Eb").getName()).toEqual("Eb");
    expect(new Note("E").getName()).toEqual("E");
    expect(new Note("E#").getName()).toEqual("E#");
    expect(new Note("Fb").getName()).toEqual("Fb");
    expect(new Note("F").getName()).toEqual("F");
    expect(new Note("F#").getName()).toEqual("F#");
    expect(new Note("Gb").getName()).toEqual("Gb");
    expect(new Note("G").getName()).toEqual("G");
    expect(new Note("G#").getName()).toEqual("G#");
    expect(new Note("Ab").getName()).toEqual("Ab");
    expect(new Note("A").getName()).toEqual("A");
    expect(new Note("A#").getName()).toEqual("A#");
    expect(new Note("Bb").getName()).toEqual("Bb");
    expect(new Note("B").getName()).toEqual("B");
    expect(new Note("B#").getName()).toEqual("B#");

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
    expect(new Note("Bb0").getFrequency()).toEqual(29.13524);
    expect(new Note("B0").getFrequency()).toEqual(30.86771);
    expect(new Note("C1").getFrequency()).toEqual(32.7032);
    expect(new Note("C#1").getFrequency()).toEqual(34.64783);
    expect(new Note("D2").getFrequency()).toEqual(73.41619);
    expect(new Note("Db2").getFrequency()).toEqual(69.29566);
    expect(new Note("E3").getFrequency()).toEqual(164.81378);
    expect(new Note("Eb3").getFrequency()).toEqual(155.56349);
    expect(new Note("F4").getFrequency()).toEqual(349.22823);
    expect(new Note("F#4").getFrequency()).toEqual(369.99442);
    expect(new Note("A4").getFrequency()).toEqual(440.0);
    expect(new Note("G5").getFrequency()).toEqual(783.99087);
    expect(new Note("Gb5").getFrequency()).toEqual(739.98885);
    expect(new Note("A6").getFrequency()).toEqual(1760.0);
    expect(new Note("Ab6").getFrequency()).toEqual(1661.21879);
    expect(new Note("B7").getFrequency()).toEqual(3951.06641);
    expect(new Note("Bb7").getFrequency()).toEqual(3729.31009);
  });
});
