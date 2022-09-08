import { Interval } from "../interval";

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

describe("#isMinor", () => {
  describe("with a minor 2nd", () => {
    describe("and there are 1 semitone between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "Db").isMinor(2)).toBeTruthy();
        expect(Interval.between("C#", "D").isMinor(2)).toBeTruthy();
        expect(Interval.between("D", "Eb").isMinor(2)).toBeTruthy();
        expect(Interval.between("E", "F").isMinor(2)).toBeTruthy();
        expect(Interval.between("F", "F#").isMinor(2)).toBeTruthy();
        expect(Interval.between("F#", "G").isMinor(2)).toBeTruthy();
        expect(Interval.between("G", "G#").isMinor(2)).toBeTruthy();
        expect(Interval.between("G#", "A").isMinor(2)).toBeTruthy();
        expect(Interval.between("A", "Bb").isMinor(2)).toBeTruthy();
        expect(Interval.between("B", "C").isMinor(2)).toBeTruthy();
      });
    });

    describe("and there are not 1 semitone between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "D" ).isMinor(2)).toBeFalsy();
      });
    });
  });

  describe("with a minor 3rd", () => {
    describe("and there are 3 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "Eb").isMinor(3)).toBeTruthy();
        expect(Interval.between("C#", "E").isMinor(3)).toBeTruthy();
        expect(Interval.between("Db", "Fb").isMinor(3)).toBeTruthy();
        expect(Interval.between("D", "F").isMinor(3)).toBeTruthy();
        expect(Interval.between("D#", "F#").isMinor(3)).toBeTruthy();
        expect(Interval.between("Eb", "Gb").isMinor(3)).toBeTruthy();
        expect(Interval.between("E", "G").isMinor(3)).toBeTruthy();
        expect(Interval.between("F", "Ab").isMinor(3)).toBeTruthy();
        expect(Interval.between("F#", "A").isMinor(3)).toBeTruthy();
        expect(Interval.between("G", "Bb").isMinor(3)).toBeTruthy();
        expect(Interval.between("G#", "B").isMinor(3)).toBeTruthy();
        expect(Interval.between("Ab", "Cb").isMinor(3)).toBeTruthy();
        expect(Interval.between("A", "C").isMinor(3)).toBeTruthy();
        expect(Interval.between("Bb", "Db").isMinor(3)).toBeTruthy();
        expect(Interval.between("B", "D").isMinor(3)).toBeTruthy();
      });
    });

    describe("and there are not 3 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "D").isMinor(3)).toBeFalsy();
      });
    });
  });

  describe("with a minor 6th", () => {
    describe("and there are 8 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "Ab").isMinor(6)).toBeTruthy();
        expect(Interval.between("Db", "A").isMinor(6)).toBeTruthy();
        expect(Interval.between("D", "Bb").isMinor(6)).toBeTruthy();
        expect(Interval.between("Eb", "Cb").isMinor(6)).toBeTruthy();
        expect(Interval.between("E", "C").isMinor(6)).toBeTruthy();
        expect(Interval.between("F", "Db").isMinor(6)).toBeTruthy();
        expect(Interval.between("F#", "D").isMinor(6)).toBeTruthy();
        expect(Interval.between("G", "Eb").isMinor(6)).toBeTruthy();
        expect(Interval.between("Ab", "Fb").isMinor(6)).toBeTruthy();
        expect(Interval.between("A", "F").isMinor(6)).toBeTruthy();
        expect(Interval.between("Bb", "Gb").isMinor(6)).toBeTruthy();
      });
    });

    describe("and there are not 8 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "F").isMinor(6)).toBeFalsy();
      });
    });
  });

  describe("with a minor 7th", () => {
    describe("and there are 10 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "Bb").isMinor(7)).toBeTruthy();
        expect(Interval.between("Db", "Cb").isMinor(7)).toBeTruthy();
        expect(Interval.between("D", "C").isMinor(7)).toBeTruthy();
        expect(Interval.between("Eb", "Db").isMinor(7)).toBeTruthy();
        expect(Interval.between("E", "D").isMinor(7)).toBeTruthy();
        expect(Interval.between("F", "Eb").isMinor(7)).toBeTruthy();
        expect(Interval.between("F#", "E").isMinor(7)).toBeTruthy();
        expect(Interval.between("G", "F").isMinor(7)).toBeTruthy();
        expect(Interval.between("Ab", "Gb").isMinor(7)).toBeTruthy();
        expect(Interval.between("A", "G").isMinor(7)).toBeTruthy();
        expect(Interval.between("Bb", "Ab").isMinor(7)).toBeTruthy();
      });
    });

    describe("and there are not 10 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "A").isMinor(7)).toBeFalsy();
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

describe("#isAugmented", () => {
  describe("with an augmented 4th", () => {
    describe("and there are 6 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "F#").isAugmented(4)).toBeTruthy();
        expect(Interval.between("C#", "G").isAugmented(4)).toBeTruthy();
        expect(Interval.between("Db", "G").isAugmented(4)).toBeTruthy();
        expect(Interval.between("D", "G#").isAugmented(4)).toBeTruthy();
        expect(Interval.between("Eb", "A").isAugmented(4)).toBeTruthy();
        expect(Interval.between("E", "A#").isAugmented(4)).toBeTruthy();
        expect(Interval.between("F", "B").isAugmented(4)).toBeTruthy();
        expect(Interval.between("F#", "C").isAugmented(4)).toBeTruthy();
        expect(Interval.between("G", "C#").isAugmented(4)).toBeTruthy();
        expect(Interval.between("G#", "D").isAugmented(4)).toBeTruthy();
        expect(Interval.between("Ab", "D").isAugmented(4)).toBeTruthy();
        expect(Interval.between("A", "D#").isAugmented(4)).toBeTruthy();
        expect(Interval.between("Bb", "E").isAugmented(4)).toBeTruthy();
        expect(Interval.between("B", "F").isAugmented(4)).toBeTruthy();
      });
    });

    describe("and there are not 6 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "E").isAugmented(4)).toBeFalsy();
      });
    });
  });

  describe("with an augmented 5th", () => {
    describe("and there are 8 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "G#").isAugmented(5)).toBeTruthy();
        expect(Interval.between("Db", "A").isAugmented(5)).toBeTruthy();
        expect(Interval.between("D", "A#").isAugmented(5)).toBeTruthy();
        expect(Interval.between("Eb", "B").isAugmented(5)).toBeTruthy();
        expect(Interval.between("E", "B#").isAugmented(5)).toBeTruthy();
        expect(Interval.between("F", "C#").isAugmented(5)).toBeTruthy();
        expect(Interval.between("F#", "D").isAugmented(5)).toBeTruthy();
        expect(Interval.between("G", "D#").isAugmented(5)).toBeTruthy();
        expect(Interval.between("Ab", "E").isAugmented(5)).toBeTruthy();
        expect(Interval.between("A", "E#").isAugmented(5)).toBeTruthy();
        expect(Interval.between("Bb", "F#").isAugmented(5)).toBeTruthy();
        expect(Interval.between("B", "G").isAugmented(5)).toBeTruthy();
      });
    });

    describe("and there is not 8 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "D").isAugmented(5)).toBeFalsy();
      });
    });
  });
});

describe("#isDiminished", () => {
  describe("with a diminished 4th", () => {
    describe("and there are 4 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "Fb").isDiminished(4)).toBeTruthy();
        expect(Interval.between("C#", "F").isDiminished(4)).toBeTruthy();
        expect(Interval.between("Db", "F").isDiminished(4)).toBeTruthy();
        expect(Interval.between("D", "F#").isDiminished(4)).toBeTruthy();
        expect(Interval.between("Eb", "G").isDiminished(4)).toBeTruthy();
        expect(Interval.between("E", "G#").isDiminished(4)).toBeTruthy();
        expect(Interval.between("F", "A").isDiminished(4)).toBeTruthy();
        expect(Interval.between("F#", "A#").isDiminished(4)).toBeTruthy();
        expect(Interval.between("G", "Cb").isDiminished(4)).toBeTruthy();
        expect(Interval.between("G#", "C").isDiminished(4)).toBeTruthy();
        expect(Interval.between("Ab", "C").isDiminished(4)).toBeTruthy();
        expect(Interval.between("A", "Db").isDiminished(4)).toBeTruthy();
        expect(Interval.between("Bb", "D").isDiminished(4)).toBeTruthy();
        expect(Interval.between("B", "D#").isDiminished(4)).toBeTruthy();
      });
    });

    describe("and there are not 4 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "F").isDiminished(4)).toBeFalsy();
      });
    });
  });

  describe("with an diminished 5th", () => {
    describe("and there are 6 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "Gb").isDiminished(5)).toBeTruthy();
        expect(Interval.between("Db", "G").isDiminished(5)).toBeTruthy();
        expect(Interval.between("D", "G#").isDiminished(5)).toBeTruthy();
        expect(Interval.between("Eb", "A").isDiminished(5)).toBeTruthy();
        expect(Interval.between("E", "Bb").isDiminished(5)).toBeTruthy();
        expect(Interval.between("F", "B").isDiminished(5)).toBeTruthy();
        expect(Interval.between("F#", "C").isDiminished(5)).toBeTruthy();
        expect(Interval.between("G", "C#").isDiminished(5)).toBeTruthy();
        expect(Interval.between("Ab", "D").isDiminished(5)).toBeTruthy();
        expect(Interval.between("A", "D#").isDiminished(5)).toBeTruthy();
        expect(Interval.between("Bb", "E").isDiminished(5)).toBeTruthy();
        expect(Interval.between("B", "F").isDiminished(5)).toBeTruthy();
      });
    });

    describe("and there is not 6 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "D").isDiminished(5)).toBeFalsy();
      });
    });
  });

  describe("with an diminished 7th", () => {
    describe("and there are 9 semitones between the notes", () => {
      it("returns true", () => {
        expect(Interval.between("C", "A").isDiminished(7)).toBeTruthy();
        expect(Interval.between("Db", "Bb").isDiminished(7)).toBeTruthy();
        expect(Interval.between("D", "B").isDiminished(7)).toBeTruthy();
        expect(Interval.between("Eb", "C").isDiminished(7)).toBeTruthy();
        expect(Interval.between("E", "C#").isDiminished(7)).toBeTruthy();
        expect(Interval.between("F", "D").isDiminished(7)).toBeTruthy();
        expect(Interval.between("F#", "D#").isDiminished(7)).toBeTruthy();
        expect(Interval.between("G", "E").isDiminished(7)).toBeTruthy();
        expect(Interval.between("Ab", "F").isDiminished(7)).toBeTruthy();
        expect(Interval.between("A", "F#").isDiminished(7)).toBeTruthy();
        expect(Interval.between("Bb", "G").isDiminished(7)).toBeTruthy();
      });
    });

    describe("and there is not 9 semitones between the notes", () => {
      it("returns false", () => {
        expect(Interval.between("C", "D").isDiminished(7)).toBeFalsy();
      });
    });
  });
});
