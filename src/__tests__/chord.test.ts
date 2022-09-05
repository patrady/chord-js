import { Chord } from "../chord";

describe("Major Chords", () => {
  it("returns the name of the major chord", () => {
    expect(Chord.for("C E G")?.getName()).toEqual("C Major");
    expect(Chord.for("C# E# G#")?.getName()).toEqual("C# Major");
    expect(Chord.for("Db F Ab")?.getName()).toEqual("Db Major");
    expect(Chord.for("D F# A")?.getName()).toEqual("D Major");
    expect(Chord.for("Eb G Bb")?.getName()).toEqual("Eb Major");
    expect(Chord.for("E G# B")?.getName()).toEqual("E Major");
    expect(Chord.for("F A C")?.getName()).toEqual("F Major");
    expect(Chord.for("F# A# C#")?.getName()).toEqual("F# Major");
    expect(Chord.for("Gb Bb Db")?.getName()).toEqual("Gb Major");
    expect(Chord.for("G B D")?.getName()).toEqual("G Major");
    expect(Chord.for("G# B# D#")?.getName()).toEqual("G# Major");
    expect(Chord.for("Ab C Eb")?.getName()).toEqual("Ab Major");
    expect(Chord.for("A C# E")?.getName()).toEqual("A Major");
    expect(Chord.for("Bb D F")?.getName()).toEqual("Bb Major");
    expect(Chord.for("B D# F#")?.getName()).toEqual("B Major");
  });
});

describe("Minor Chords", () => {
  it("returns the name of the minor chord", () => {
    expect(Chord.for("C Eb G")?.getName()).toEqual("C minor");
    expect(Chord.for("C# E G#")?.getName()).toEqual("C# minor");
    expect(Chord.for("Db Fb Ab")?.getName()).toEqual("Db minor");
    expect(Chord.for("D F A")?.getName()).toEqual("D minor");
    expect(Chord.for("Eb Gb Bb")?.getName()).toEqual("Eb minor");
    expect(Chord.for("E G B")?.getName()).toEqual("E minor");
    expect(Chord.for("F Ab C")?.getName()).toEqual("F minor");
    expect(Chord.for("F# A C#")?.getName()).toEqual("F# minor");
    expect(Chord.for("G Bb D")?.getName()).toEqual("G minor");
    expect(Chord.for("G# B D#")?.getName()).toEqual("G# minor");
    expect(Chord.for("Ab Cb Eb")?.getName()).toEqual("Ab minor");
    expect(Chord.for("A C E")?.getName()).toEqual("A minor");
    expect(Chord.for("Bb Db F")?.getName()).toEqual("Bb minor");
    expect(Chord.for("B D F#")?.getName()).toEqual("B minor");
  });
});

describe("Inverted Major Chords", () => {
  it("returns the name of the inverted major chord", () => {
    expect(Chord.for("E G C")?.getName()).toEqual("C/E");
    expect(Chord.for("G C E")?.getName()).toEqual("C/G");
    expect(Chord.for("G# C# E#")?.getName()).toEqual("C#/G#");
    expect(Chord.for("E# G# C#")?.getName()).toEqual("C#/E#");
    expect(Chord.for("F Ab Db")?.getName()).toEqual("Db/F");
    expect(Chord.for("Ab Db F")?.getName()).toEqual("Db/Ab");
    expect(Chord.for("A D F#")?.getName()).toEqual("D/A");
    expect(Chord.for("F# A D")?.getName()).toEqual("D/F#");
    expect(Chord.for("G Bb Eb")?.getName()).toEqual("Eb/G");
    expect(Chord.for("Bb Eb G")?.getName()).toEqual("Eb/Bb");
    expect(Chord.for("G# B E")?.getName()).toEqual("E/G#");
    expect(Chord.for("B E G#")?.getName()).toEqual("E/B");
    expect(Chord.for("A C F")?.getName()).toEqual("F/A");
    expect(Chord.for("C F A")?.getName()).toEqual("F/C");
    expect(Chord.for("A# C# F#")?.getName()).toEqual("F#/A#");
    expect(Chord.for("C# F# A#")?.getName()).toEqual("F#/C#");
    expect(Chord.for("Bb Db Gb")?.getName()).toEqual("Gb/Bb");
    expect(Chord.for("Db Gb Bb")?.getName()).toEqual("Gb/Db");
    expect(Chord.for("B D G")?.getName()).toEqual("G/B");
    expect(Chord.for("D G B")?.getName()).toEqual("G/D");
    expect(Chord.for("B# D# G#")?.getName()).toEqual("G#/B#");
    expect(Chord.for("D# G# B#")?.getName()).toEqual("G#/D#");
    expect(Chord.for("C Eb Ab")?.getName()).toEqual("Ab/C");
    expect(Chord.for("Eb Ab C")?.getName()).toEqual("Ab/Eb");
    expect(Chord.for("C# E A")?.getName()).toEqual("A/C#");
    expect(Chord.for("E A C#")?.getName()).toEqual("A/E");
    expect(Chord.for("D F Bb")?.getName()).toEqual("Bb/D");
    expect(Chord.for("F Bb D")?.getName()).toEqual("Bb/F");
    expect(Chord.for("D# F# B")?.getName()).toEqual("B/D#");
    expect(Chord.for("F# B D#")?.getName()).toEqual("B/F#");
  });
});
