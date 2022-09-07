import { Chord } from "../chord";

describe("Major Chords", () => {
  it("returns the name of the major chord", () => {
    expect(Chord.for("C E G")?.getName()).toEqual("C");
    expect(Chord.for("C# E# G#")?.getName()).toEqual("C#");
    expect(Chord.for("Db F Ab")?.getName()).toEqual("Db");
    expect(Chord.for("D F# A")?.getName()).toEqual("D");
    expect(Chord.for("Eb G Bb")?.getName()).toEqual("Eb");
    expect(Chord.for("E G# B")?.getName()).toEqual("E");
    expect(Chord.for("F A C")?.getName()).toEqual("F");
    expect(Chord.for("F# A# C#")?.getName()).toEqual("F#");
    expect(Chord.for("Gb Bb Db")?.getName()).toEqual("Gb");
    expect(Chord.for("G B D")?.getName()).toEqual("G");
    expect(Chord.for("G# B# D#")?.getName()).toEqual("G#");
    expect(Chord.for("Ab C Eb")?.getName()).toEqual("Ab");
    expect(Chord.for("A C# E")?.getName()).toEqual("A");
    expect(Chord.for("Bb D F")?.getName()).toEqual("Bb");
    expect(Chord.for("B D# F#")?.getName()).toEqual("B");
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

describe("Minor Chords", () => {
  it("returns the name of the minor chord", () => {
    expect(Chord.for("C Eb G")?.getName()).toEqual("Cm");
    expect(Chord.for("C# E G#")?.getName()).toEqual("C#m");
    expect(Chord.for("Db Fb Ab")?.getName()).toEqual("Dbm");
    expect(Chord.for("D F A")?.getName()).toEqual("Dm");
    expect(Chord.for("Eb Gb Bb")?.getName()).toEqual("Ebm");
    expect(Chord.for("E G B")?.getName()).toEqual("Em");
    expect(Chord.for("F Ab C")?.getName()).toEqual("Fm");
    expect(Chord.for("F# A C#")?.getName()).toEqual("F#m");
    expect(Chord.for("G Bb D")?.getName()).toEqual("Gm");
    expect(Chord.for("G# B D#")?.getName()).toEqual("G#m");
    expect(Chord.for("Ab Cb Eb")?.getName()).toEqual("Abm");
    expect(Chord.for("A C E")?.getName()).toEqual("Am");
    expect(Chord.for("Bb Db F")?.getName()).toEqual("Bbm");
    expect(Chord.for("B D F#")?.getName()).toEqual("Bm");
  });
});

describe("Inverted Minor Chords", () => {
  it("returns the name of the inverted minor chord", () => {
    expect(Chord.for("Eb G C")?.getName()).toEqual("Cm/Eb");
    expect(Chord.for("G C Eb")?.getName()).toEqual("Cm/G");
    expect(Chord.for("E G# C#")?.getName()).toEqual("C#m/E");
    expect(Chord.for("G# C# E")?.getName()).toEqual("C#m/G#");
    expect(Chord.for("Fb Ab Db")?.getName()).toEqual("Dbm/Fb");
    expect(Chord.for("Ab Db Fb")?.getName()).toEqual("Dbm/Ab");
    expect(Chord.for("F A D")?.getName()).toEqual("Dm/F");
    expect(Chord.for("A D F")?.getName()).toEqual("Dm/A");
    expect(Chord.for("Gb Bb Eb")?.getName()).toEqual("Ebm/Gb");
    expect(Chord.for("Bb Eb Gb")?.getName()).toEqual("Ebm/Bb");
    expect(Chord.for("G B E")?.getName()).toEqual("Em/G");
    expect(Chord.for("B E G")?.getName()).toEqual("Em/B");
    expect(Chord.for("Ab C F")?.getName()).toEqual("Fm/Ab");
    expect(Chord.for("C F Ab")?.getName()).toEqual("Fm/C");
    expect(Chord.for("A C# F#")?.getName()).toEqual("F#m/A");
    expect(Chord.for("C# F# A")?.getName()).toEqual("F#m/C#");
    expect(Chord.for("Bb D G")?.getName()).toEqual("Gm/Bb");
    expect(Chord.for("D G Bb")?.getName()).toEqual("Gm/D");
    expect(Chord.for("B D# G#")?.getName()).toEqual("G#m/B");
    expect(Chord.for("D# G# B")?.getName()).toEqual("G#m/D#");
    expect(Chord.for("Cb Eb Ab")?.getName()).toEqual("Abm/Cb");
    expect(Chord.for("Eb Ab Cb")?.getName()).toEqual("Abm/Eb");
    expect(Chord.for("C E A")?.getName()).toEqual("Am/C");
    expect(Chord.for("E A C")?.getName()).toEqual("Am/E");
    expect(Chord.for("Db F Bb")?.getName()).toEqual("Bbm/Db");
    expect(Chord.for("F Bb Db")?.getName()).toEqual("Bbm/F");
    expect(Chord.for("D F# B")?.getName()).toEqual("Bm/D");
    expect(Chord.for("F# B D")?.getName()).toEqual("Bm/F#");
  });
});

describe("Suspended Chords", () => {
  it("returns the name of the suspended chord", () => {
    expect(Chord.for("C F G")?.getName()).toEqual("Csus");
    expect(Chord.for("C# F# G#")?.getName()).toEqual("C#sus");
    expect(Chord.for("Db Gb Ab")?.getName()).toEqual("Dbsus");
    expect(Chord.for("Eb Ab Bb")?.getName()).toEqual("Ebsus");
    expect(Chord.for("E A B")?.getName()).toEqual("Esus");
    expect(Chord.for("F Bb C")?.getName()).toEqual("Fsus");
    expect(Chord.for("F# B C#")?.getName()).toEqual("F#sus");
    expect(Chord.for("G C D")?.getName()).toEqual("Gsus");
    expect(Chord.for("Ab Db Eb")?.getName()).toEqual("Absus");
    expect(Chord.for("A D E")?.getName()).toEqual("Asus");
    expect(Chord.for("Bb Eb F")?.getName()).toEqual("Bbsus");
    expect(Chord.for("B E F#")?.getName()).toEqual("Bsus");
  });
});

describe("Inverted Suspended Chords", () => {
  it("returns the name of the inverted suspended chord", () => {
    expect(Chord.for("G C F")?.getName()).toEqual("Csus/G");
    expect(Chord.for("G# C# F#")?.getName()).toEqual("C#sus/G#");
    expect(Chord.for("Ab Db Gb")?.getName()).toEqual("Dbsus/Ab");
    expect(Chord.for("Bb Eb Ab")?.getName()).toEqual("Ebsus/Bb");
    expect(Chord.for("B E A")?.getName()).toEqual("Esus/B");
    expect(Chord.for("C F Bb")?.getName()).toEqual("Fsus/C");
    expect(Chord.for("C# F# B")?.getName()).toEqual("F#sus/C#");
    expect(Chord.for("D G C")?.getName()).toEqual("Gsus/D");
    expect(Chord.for("Eb Ab Db")?.getName()).toEqual("Absus/Eb");
    expect(Chord.for("E A D")?.getName()).toEqual("Asus/E");
    expect(Chord.for("F Bb Eb")?.getName()).toEqual("Bbsus/F");
    expect(Chord.for("F# B E")?.getName()).toEqual("Bsus/F#");
  });
});

describe("Suspended Second Chords", () => {
  it("returns the name of the suspended second chord", () => {
    expect(Chord.for("C D G")?.getName()).toEqual("Csus2");
    expect(Chord.for("C# D# G#")?.getName()).toEqual("C#sus2");
    expect(Chord.for("Db Eb Ab")?.getName()).toEqual("Dbsus2");
    expect(Chord.for("D E A")?.getName()).toEqual("Dsus2");
    expect(Chord.for("Eb F Bb")?.getName()).toEqual("Ebsus2");
    expect(Chord.for("E F# B")?.getName()).toEqual("Esus2");
    expect(Chord.for("F G C")?.getName()).toEqual("Fsus2");
    expect(Chord.for("F# G# C#")?.getName()).toEqual("F#sus2");
    expect(Chord.for("Gb Ab Db")?.getName()).toEqual("Gbsus2");
    expect(Chord.for("G A D")?.getName()).toEqual("Gsus2");
    expect(Chord.for("Ab Bb Eb")?.getName()).toEqual("Absus2");
    expect(Chord.for("A B E")?.getName()).toEqual("Asus2");
    expect(Chord.for("Bb C F")?.getName()).toEqual("Bbsus2");
    expect(Chord.for("B C# F#")?.getName()).toEqual("Bsus2");
  });
});

describe("Augmented Chords", () => {
  it("returns the name of the augmented chord", () => {
    expect(Chord.for("C E G#")?.getName()).toEqual("Caug");
    expect(Chord.for("C# E# G##")?.getName()).toEqual("C#aug");
    expect(Chord.for("Db F A")?.getName()).toEqual("Dbaug");
    expect(Chord.for("D F# A#")?.getName()).toEqual("Daug");
    expect(Chord.for("Eb G B")?.getName()).toEqual("Ebaug");
    expect(Chord.for("E G# B#")?.getName()).toEqual("Eaug");
    expect(Chord.for("F A C#")?.getName()).toEqual("Faug");
    expect(Chord.for("F# A# C##")?.getName()).toEqual("F#aug");
    expect(Chord.for("Gb Bb D")?.getName()).toEqual("Gbaug");
    expect(Chord.for("G B D#")?.getName()).toEqual("Gaug");
    expect(Chord.for("G# B# D##")?.getName()).toEqual("G#aug");
    expect(Chord.for("Ab C E")?.getName()).toEqual("Abaug");
    expect(Chord.for("A C# E#")?.getName()).toEqual("Aaug");
    expect(Chord.for("Bb D F#")?.getName()).toEqual("Bbaug");
    expect(Chord.for("B D# F##")?.getName()).toEqual("Baug");
  });
});

describe("Diminished Chords", () => {
  it("returns the name of the diminished chord", () => {
    expect(Chord.for("C Eb Gb")?.getName()).toEqual("Cdim");
    expect(Chord.for("C# E G")?.getName()).toEqual("C#dim");
    expect(Chord.for("Db Fb Abb")?.getName()).toEqual("Dbdim");
    expect(Chord.for("D F Ab")?.getName()).toEqual("Ddim");
    expect(Chord.for("Eb Gb Bbb")?.getName()).toEqual("Ebdim");
    expect(Chord.for("E G Bb")?.getName()).toEqual("Edim");
    expect(Chord.for("F Ab Cb")?.getName()).toEqual("Fdim");
    expect(Chord.for("F# A C")?.getName()).toEqual("F#dim");
    expect(Chord.for("G Bb Db")?.getName()).toEqual("Gdim");
    expect(Chord.for("G# B D")?.getName()).toEqual("G#dim");
    expect(Chord.for("Ab Cb Ebb")?.getName()).toEqual("Abdim");
    expect(Chord.for("A C Eb")?.getName()).toEqual("Adim");
    expect(Chord.for("Bb Db Fb")?.getName()).toEqual("Bbdim");
    expect(Chord.for("B D F")?.getName()).toEqual("Bdim");
  });
});

describe("Dominant Sevenths", () => {
  it("returns the name of the dominant seventh", () => {
    expect(Chord.for("C E G Bb")?.getName()).toEqual("C7");
    expect(Chord.for("Db F Ab Cb")?.getName()).toEqual("Db7");
    expect(Chord.for("D F# A C")?.getName()).toEqual("D7");
    expect(Chord.for("Eb G Bb Db")?.getName()).toEqual("Eb7");
    expect(Chord.for("E G# B D")?.getName()).toEqual("E7");
    expect(Chord.for("F A C Eb")?.getName()).toEqual("F7");
    expect(Chord.for("Gb Bb Db Fb")?.getName()).toEqual("Gb7");
    expect(Chord.for("G B D F")?.getName()).toEqual("G7");
    expect(Chord.for("Ab C Eb Gb")?.getName()).toEqual("Ab7");
    expect(Chord.for("A C# E G")?.getName()).toEqual("A7");
    expect(Chord.for("Bb D F Ab")?.getName()).toEqual("Bb7");
    expect(Chord.for("B D# F# A")?.getName()).toEqual("B7");
  });
});

describe("Major Sevenths", () => {
  it("returns the name of the major seventh", () => {
    expect(Chord.for("C E G B")?.getName()).toEqual("Cmaj7");
    expect(Chord.for("C# E# G# B#")?.getName()).toEqual("C#maj7");
    expect(Chord.for("Db F Ab C")?.getName()).toEqual("Dbmaj7");
    expect(Chord.for("D F# A C#")?.getName()).toEqual("Dmaj7");
    expect(Chord.for("D# F## A# C##")?.getName()).toEqual("D#maj7");
    expect(Chord.for("Eb G Bb D")?.getName()).toEqual("Ebmaj7");
    expect(Chord.for("E G# B D#")?.getName()).toEqual("Emaj7");
    expect(Chord.for("F A C E")?.getName()).toEqual("Fmaj7");
    expect(Chord.for("F# A# C# E#")?.getName()).toEqual("F#maj7");
    expect(Chord.for("Gb Bb Db F")?.getName()).toEqual("Gbmaj7");
    expect(Chord.for("G B D F#")?.getName()).toEqual("Gmaj7");
    expect(Chord.for("G# B# D# F##")?.getName()).toEqual("G#maj7");
    expect(Chord.for("Ab C Eb G")?.getName()).toEqual("Abmaj7");
    expect(Chord.for("A C# E G#")?.getName()).toEqual("Amaj7");
    expect(Chord.for("A# C## E# G##")?.getName()).toEqual("A#maj7");
    expect(Chord.for("Bb D F A")?.getName()).toEqual("Bbmaj7");
    expect(Chord.for("B D# F# A#")?.getName()).toEqual("Bmaj7");
  });
});

describe("Minor Sevenths", () => {
  it("returns the name of the minor seventh", () => {
    expect(Chord.for("C Eb G Bb")?.getName()).toEqual("Cm7");
    expect(Chord.for("C# E G# B")?.getName()).toEqual("C#m7");
    expect(Chord.for("Db Fb Ab Cb")?.getName()).toEqual("Dbm7");
    expect(Chord.for("D F A C")?.getName()).toEqual("Dm7");
    expect(Chord.for("D# F# A# C#")?.getName()).toEqual("D#m7");
    expect(Chord.for("Eb Gb Bb Db")?.getName()).toEqual("Ebm7");
    expect(Chord.for("E G B D")?.getName()).toEqual("Em7");
    expect(Chord.for("F Ab C Eb")?.getName()).toEqual("Fm7");
    expect(Chord.for("F# A C# E")?.getName()).toEqual("F#m7");
    expect(Chord.for("Gb Bbb Db Fb")?.getName()).toEqual("Gbm7");
    expect(Chord.for("G Bb D F")?.getName()).toEqual("Gm7");
    expect(Chord.for("G# B D# F#")?.getName()).toEqual("G#m7");
    expect(Chord.for("Ab Cb Eb Gb")?.getName()).toEqual("Abm7");
    expect(Chord.for("A C E G")?.getName()).toEqual("Am7");
    expect(Chord.for("A# C# E# G#")?.getName()).toEqual("A#m7");
    expect(Chord.for("Bb Db F Ab")?.getName()).toEqual("Bbm7");
    expect(Chord.for("B D F# A")?.getName()).toEqual("Bm7");
  });
});
