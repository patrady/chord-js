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
