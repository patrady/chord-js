import { Interval } from "../interval";

it("works", () => {
  //   expect(Interval.between("C", "E").isMinor(3)).toBeTruthy();
});

describe("#toSemitones", () => {
  it("returns the number of half steps between two notes", () => {
    expect(Interval.between("C", "C").toSemitones()).toEqual(0);
    expect(Interval.between("C", "C#").toSemitones()).toEqual(1);
    expect(Interval.between("C", "Db").toSemitones()).toEqual(1);
    expect(Interval.between("C", "D").toSemitones()).toEqual(2);
    expect(Interval.between("C", "D#").toSemitones()).toEqual(3);
    expect(Interval.between("C", "Eb").toSemitones()).toEqual(3);
    expect(Interval.between("C", "E").toSemitones()).toEqual(4);
    expect(Interval.between("C", "Fb").toSemitones()).toEqual(4);
    expect(Interval.between("C", "E#").toSemitones()).toEqual(5);
    expect(Interval.between("C", "F").toSemitones()).toEqual(5);
    expect(Interval.between("C", "F#").toSemitones()).toEqual(6);
    expect(Interval.between("C", "Gb").toSemitones()).toEqual(6);
    expect(Interval.between("C", "G").toSemitones()).toEqual(7);
    expect(Interval.between("C", "G#").toSemitones()).toEqual(8);
    expect(Interval.between("C", "Ab").toSemitones()).toEqual(8);
    expect(Interval.between("C", "A").toSemitones()).toEqual(9);
    expect(Interval.between("C", "A#").toSemitones()).toEqual(10);
    expect(Interval.between("C", "Bb").toSemitones()).toEqual(10);
    expect(Interval.between("C", "B").toSemitones()).toEqual(11);

    expect(Interval.between("D", "D").toSemitones()).toEqual(0);
    expect(Interval.between("D", "D#").toSemitones()).toEqual(1);
    expect(Interval.between("D", "Eb").toSemitones()).toEqual(1);
    expect(Interval.between("D", "E").toSemitones()).toEqual(2);
    expect(Interval.between("D", "Fb").toSemitones()).toEqual(2);
    expect(Interval.between("D", "E#").toSemitones()).toEqual(3);
    expect(Interval.between("D", "F").toSemitones()).toEqual(3);
    expect(Interval.between("D", "F#").toSemitones()).toEqual(4);
    expect(Interval.between("D", "Gb").toSemitones()).toEqual(4);
    expect(Interval.between("D", "G").toSemitones()).toEqual(5);
    expect(Interval.between("D", "G#").toSemitones()).toEqual(6);
    expect(Interval.between("D", "Ab").toSemitones()).toEqual(6);
    expect(Interval.between("D", "A").toSemitones()).toEqual(7);
    expect(Interval.between("D", "A#").toSemitones()).toEqual(8);
    expect(Interval.between("D", "Bb").toSemitones()).toEqual(8);
    expect(Interval.between("D", "B").toSemitones()).toEqual(9);
    expect(Interval.between("D", "B#").toSemitones()).toEqual(10);
    expect(Interval.between("D", "C").toSemitones()).toEqual(10);
    expect(Interval.between("D", "C#").toSemitones()).toEqual(11);
    expect(Interval.between("D", "Db").toSemitones()).toEqual(11);

    expect(Interval.between("F", "F").toSemitones()).toEqual(0);
    expect(Interval.between("F", "F#").toSemitones()).toEqual(1);
    expect(Interval.between("F", "Gb").toSemitones()).toEqual(1);
    expect(Interval.between("F", "G").toSemitones()).toEqual(2);
    expect(Interval.between("F", "G#").toSemitones()).toEqual(3);
    expect(Interval.between("F", "Ab").toSemitones()).toEqual(3);
    expect(Interval.between("F", "A").toSemitones()).toEqual(4);
    expect(Interval.between("F", "A#").toSemitones()).toEqual(5);
    expect(Interval.between("F", "Bb").toSemitones()).toEqual(5);
    expect(Interval.between("F", "B").toSemitones()).toEqual(6);
    expect(Interval.between("F", "B#").toSemitones()).toEqual(7);
    expect(Interval.between("F", "C").toSemitones()).toEqual(7);
    expect(Interval.between("F", "C#").toSemitones()).toEqual(8);
    expect(Interval.between("F", "Db").toSemitones()).toEqual(8);
    expect(Interval.between("F", "D").toSemitones()).toEqual(9);
    expect(Interval.between("F", "D#").toSemitones()).toEqual(10);
    expect(Interval.between("F", "Eb").toSemitones()).toEqual(10);
    expect(Interval.between("F", "E").toSemitones()).toEqual(11);
    expect(Interval.between("F", "Fb").toSemitones()).toEqual(11);
  });
});

describe("#isMajor", () => {
  describe("with a major 2nd", () => {
    describe("and there are 2 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "D").isMajor(2)).toBeTruthy();
        expect(Interval.between("C#", "D#").isMajor(2)).toBeTruthy();
        expect(Interval.between("D", "E").isMajor(2)).toBeTruthy();
        expect(Interval.between("Eb", "F").isMajor(2)).toBeTruthy();
        expect(Interval.between("E", "F#").isMajor(2)).toBeTruthy();
        expect(Interval.between("F", "G").isMajor(2)).toBeTruthy();
        expect(Interval.between("F#", "G#").isMajor(2)).toBeTruthy();
        expect(Interval.between("G", "A").isMajor(2)).toBeTruthy();
        expect(Interval.between("G#", "A#").isMajor(2)).toBeTruthy();
        expect(Interval.between("Ab", "Bb").isMajor(2)).toBeTruthy();
        expect(Interval.between("A", "B").isMajor(2)).toBeTruthy();
        expect(Interval.between("Bb", "C").isMajor(2)).toBeTruthy();
      });
    });

    describe("and there are not 2 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "F").isMajor(2)).toBeFalsy();
      });
    });
  });

  describe("with a major 3rd", () => {
    describe("and there are 4 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "E").isMajor(3)).toBeTruthy();
        expect(Interval.between("Db", "F").isMajor(3)).toBeTruthy();
        expect(Interval.between("D", "F#").isMajor(3)).toBeTruthy();
        expect(Interval.between("Eb", "G").isMajor(3)).toBeTruthy();
        expect(Interval.between("E", "G#").isMajor(3)).toBeTruthy();
        expect(Interval.between("F", "A").isMajor(3)).toBeTruthy();
        expect(Interval.between("F#", "A#").isMajor(3)).toBeTruthy();
        expect(Interval.between("G", "B").isMajor(3)).toBeTruthy();
        expect(Interval.between("Ab", "C").isMajor(3)).toBeTruthy();
        expect(Interval.between("A", "Db").isMajor(3)).toBeTruthy();
        expect(Interval.between("Bb", "D").isMajor(3)).toBeTruthy();
      });
    });

    describe("and there are not 4 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "D").isMajor(3)).toBeFalsy();
      });
    });
  });

  describe("with a major 6th", () => {
    describe("and there are 9 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "A").isMajor(6)).toBeTruthy();
        expect(Interval.between("Db", "Bb").isMajor(6)).toBeTruthy();
        expect(Interval.between("D", "B").isMajor(6)).toBeTruthy();
        expect(Interval.between("Eb", "C").isMajor(6)).toBeTruthy();
        expect(Interval.between("E", "C#").isMajor(6)).toBeTruthy();
        expect(Interval.between("F", "D").isMajor(6)).toBeTruthy();
        expect(Interval.between("F#", "D#").isMajor(6)).toBeTruthy();
        expect(Interval.between("G", "E").isMajor(6)).toBeTruthy();
        expect(Interval.between("Ab", "F").isMajor(6)).toBeTruthy();
        expect(Interval.between("A", "F#").isMajor(6)).toBeTruthy();
        expect(Interval.between("Bb", "G").isMajor(6)).toBeTruthy();
      });
    });

    describe("and there are not 9 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "F").isMajor(6)).toBeFalsy();
      });
    });
  });

  describe("with a major 7th", () => {
    describe("and there are 11 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "B").isMajor(7)).toBeTruthy();
        expect(Interval.between("Db", "C").isMajor(7)).toBeTruthy();
        expect(Interval.between("D", "C#").isMajor(7)).toBeTruthy();
        expect(Interval.between("Eb", "D").isMajor(7)).toBeTruthy();
        expect(Interval.between("E", "Eb").isMajor(7)).toBeTruthy();
        expect(Interval.between("F", "E").isMajor(7)).toBeTruthy();
        expect(Interval.between("F#", "F").isMajor(7)).toBeTruthy();
        expect(Interval.between("G", "F#").isMajor(7)).toBeTruthy();
        expect(Interval.between("Ab", "G").isMajor(7)).toBeTruthy();
        expect(Interval.between("A", "G#").isMajor(7)).toBeTruthy();
        expect(Interval.between("Bb", "A").isMajor(7)).toBeTruthy();
      });
    });

    describe("and there are not 11 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "A").isMajor(7)).toBeFalsy();
      });
    });
  });
});

describe("#isPerfect", () => {
  describe("with a major 4th", () => {
    describe("and there are 5 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "F").isPerfect(4)).toBeTruthy();
        expect(Interval.between("C#", "F#").isPerfect(4)).toBeTruthy();
        expect(Interval.between("Db", "Gb").isPerfect(4)).toBeTruthy();
        expect(Interval.between("D", "G").isPerfect(4)).toBeTruthy();
        expect(Interval.between("Eb", "Ab").isPerfect(4)).toBeTruthy();
        expect(Interval.between("E", "A").isPerfect(4)).toBeTruthy();
        expect(Interval.between("F", "Bb").isPerfect(4)).toBeTruthy();
        expect(Interval.between("F#", "B").isPerfect(4)).toBeTruthy();
        expect(Interval.between("G", "C").isPerfect(4)).toBeTruthy();
        expect(Interval.between("G#", "C#").isPerfect(4)).toBeTruthy();
        expect(Interval.between("Ab", "Db").isPerfect(4)).toBeTruthy();
        expect(Interval.between("A", "D").isPerfect(4)).toBeTruthy();
        expect(Interval.between("Bb", "Eb").isPerfect(4)).toBeTruthy();
        expect(Interval.between("B", "E").isPerfect(4)).toBeTruthy();
      });
    });

    describe("and there are not 5 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "E").isPerfect(4)).toBeFalsy();
      });
    });
  });

  describe("with a perfect 5th", () => {
    describe("and there are 7 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "G").isPerfect(5)).toBeTruthy();
        expect(Interval.between("Db", "Ab").isPerfect(5)).toBeTruthy();
        expect(Interval.between("D", "A").isPerfect(5)).toBeTruthy();
        expect(Interval.between("Eb", "Bb").isPerfect(5)).toBeTruthy();
        expect(Interval.between("E", "B").isPerfect(5)).toBeTruthy();
        expect(Interval.between("F", "C").isPerfect(5)).toBeTruthy();
        expect(Interval.between("F#", "C#").isPerfect(5)).toBeTruthy();
        expect(Interval.between("G", "D").isPerfect(5)).toBeTruthy();
        expect(Interval.between("Ab", "Eb").isPerfect(5)).toBeTruthy();
        expect(Interval.between("A", "E").isPerfect(5)).toBeTruthy();
        expect(Interval.between("Bb", "F").isPerfect(5)).toBeTruthy();
        expect(Interval.between("B", "F#").isPerfect(5)).toBeTruthy();
      });
    });

    describe("and there is not 4 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "D").isPerfect(5)).toBeFalsy();
      });
    });
  });
});
