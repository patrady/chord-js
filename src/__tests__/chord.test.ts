import { Chord } from '../chord';

describe('Major Chords', () => {
  it('returns the name of the major chord', () => {
    expect(Chord.for('C E G')?.getName()).toEqual('C');
    expect(Chord.for('C# E# G#')?.getName()).toEqual('C#');
    expect(Chord.for('Db F Ab')?.getName()).toEqual('Db');
    expect(Chord.for('D F# A')?.getName()).toEqual('D');
    expect(Chord.for('Eb G Bb')?.getName()).toEqual('Eb');
    expect(Chord.for('E G# B')?.getName()).toEqual('E');
    expect(Chord.for('F A C5')?.getName()).toEqual('F');
    expect(Chord.for('F# A# C#5')?.getName()).toEqual('F#');
    expect(Chord.for('Gb Bb Db5')?.getName()).toEqual('Gb');
    expect(Chord.for('G B D5')?.getName()).toEqual('G');
    expect(Chord.for('G# B# D#5')?.getName()).toEqual('G#');
    expect(Chord.for('Ab3 C Eb')?.getName()).toEqual('Ab');
    expect(Chord.for('A3 C# E')?.getName()).toEqual('A');
    expect(Chord.for('Bb3 D F')?.getName()).toEqual('Bb');
    expect(Chord.for('B3 D# F#')?.getName()).toEqual('B');
  });
});

describe('Inverted Major Chords', () => {
  it('returns the name of the inverted major chord', () => {
    expect(Chord.for('E G C5')?.getName()).toEqual('C/E');
    expect(Chord.for('G3 C E')?.getName()).toEqual('C/G');
    expect(Chord.for('G#3 C# E#')?.getName()).toEqual('C#/G#');
    expect(Chord.for('E# G# C#5')?.getName()).toEqual('C#/E#');
    expect(Chord.for('F Ab Db5')?.getName()).toEqual('Db/F');
    expect(Chord.for('Ab3 Db F')?.getName()).toEqual('Db/Ab');
    expect(Chord.for('A3 D F#')?.getName()).toEqual('D/A');
    expect(Chord.for('F# A D5')?.getName()).toEqual('D/F#');
    expect(Chord.for('G Bb Eb5')?.getName()).toEqual('Eb/G');
    expect(Chord.for('Bb3 Eb G')?.getName()).toEqual('Eb/Bb');
    expect(Chord.for('G# B E5')?.getName()).toEqual('E/G#');
    expect(Chord.for('B3 E G#')?.getName()).toEqual('E/B');
    expect(Chord.for('A3 C F')?.getName()).toEqual('F/A');
    expect(Chord.for('C F A')?.getName()).toEqual('F/C');
    expect(Chord.for('A#3 C# F#')?.getName()).toEqual('F#/A#');
    expect(Chord.for('C# F# A#')?.getName()).toEqual('F#/C#');
    expect(Chord.for('Bb3 Db Gb')?.getName()).toEqual('Gb/Bb');
    expect(Chord.for('Db Gb Bb')?.getName()).toEqual('Gb/Db');
    expect(Chord.for('B3 D G')?.getName()).toEqual('G/B');
    expect(Chord.for('D G B')?.getName()).toEqual('G/D');
    expect(Chord.for('B#3 D# G#')?.getName()).toEqual('G#/B#');
    expect(Chord.for('D# G# B#')?.getName()).toEqual('G#/D#');
    expect(Chord.for('C Eb Ab')?.getName()).toEqual('Ab/C');
    expect(Chord.for('Eb Ab C5')?.getName()).toEqual('Ab/Eb');
    expect(Chord.for('C# E A')?.getName()).toEqual('A/C#');
    expect(Chord.for('E A C#5')?.getName()).toEqual('A/E');
    expect(Chord.for('D F Bb')?.getName()).toEqual('Bb/D');
    expect(Chord.for('F Bb D5')?.getName()).toEqual('Bb/F');
    expect(Chord.for('D# F# B')?.getName()).toEqual('B/D#');
    expect(Chord.for('F# B D#5')?.getName()).toEqual('B/F#');
  });
});

describe('Minor Chords', () => {
  it('returns the name of the minor chord', () => {
    expect(Chord.for('C Eb G')?.getName()).toEqual('Cm');
    expect(Chord.for('C# E G#')?.getName()).toEqual('C#m');
    expect(Chord.for('Db Fb Ab')?.getName()).toEqual('Dbm');
    expect(Chord.for('D F A')?.getName()).toEqual('Dm');
    expect(Chord.for('Eb Gb Bb')?.getName()).toEqual('Ebm');
    expect(Chord.for('E G B')?.getName()).toEqual('Em');
    expect(Chord.for('F Ab C5')?.getName()).toEqual('Fm');
    expect(Chord.for('F# A C#5')?.getName()).toEqual('F#m');
    expect(Chord.for('G Bb D5')?.getName()).toEqual('Gm');
    expect(Chord.for('G# B D#5')?.getName()).toEqual('G#m');
    expect(Chord.for('Ab3 Cb Eb')?.getName()).toEqual('Abm');
    expect(Chord.for('A3 C E')?.getName()).toEqual('Am');
    expect(Chord.for('Bb3 Db F')?.getName()).toEqual('Bbm');
    expect(Chord.for('B3 D F#')?.getName()).toEqual('Bm');
  });
});

describe('Inverted Minor Chords', () => {
  it('returns the name of the inverted minor chord', () => {
    expect(Chord.for('Eb G C5')?.getName()).toEqual('Cm/Eb');
    expect(Chord.for('G3 C Eb')?.getName()).toEqual('Cm/G');
    expect(Chord.for('E G# C#5')?.getName()).toEqual('C#m/E');
    expect(Chord.for('G#3 C# E')?.getName()).toEqual('C#m/G#');
    expect(Chord.for('Fb Ab Db5')?.getName()).toEqual('Dbm/Fb');
    expect(Chord.for('Ab3 Db Fb')?.getName()).toEqual('Dbm/Ab');
    expect(Chord.for('F A D5')?.getName()).toEqual('Dm/F');
    expect(Chord.for('A3 D F')?.getName()).toEqual('Dm/A');
    expect(Chord.for('Gb Bb Eb5')?.getName()).toEqual('Ebm/Gb');
    expect(Chord.for('Bb3 Eb Gb')?.getName()).toEqual('Ebm/Bb');
    expect(Chord.for('G B E5')?.getName()).toEqual('Em/G');
    expect(Chord.for('B3 E G')?.getName()).toEqual('Em/B');
    expect(Chord.for('Ab3 C F')?.getName()).toEqual('Fm/Ab');
    expect(Chord.for('C F Ab')?.getName()).toEqual('Fm/C');
    expect(Chord.for('A3 C# F#')?.getName()).toEqual('F#m/A');
    expect(Chord.for('C# F# A')?.getName()).toEqual('F#m/C#');
    expect(Chord.for('Bb3 D G')?.getName()).toEqual('Gm/Bb');
    expect(Chord.for('D G Bb')?.getName()).toEqual('Gm/D');
    expect(Chord.for('B3 D# G#')?.getName()).toEqual('G#m/B');
    expect(Chord.for('D# G# B')?.getName()).toEqual('G#m/D#');
    expect(Chord.for('Cb Eb Ab')?.getName()).toEqual('Abm/Cb');
    expect(Chord.for('Eb Ab Cb5')?.getName()).toEqual('Abm/Eb');
    expect(Chord.for('C E A')?.getName()).toEqual('Am/C');
    expect(Chord.for('E A C5')?.getName()).toEqual('Am/E');
    expect(Chord.for('Db F Bb')?.getName()).toEqual('Bbm/Db');
    expect(Chord.for('F Bb Db5')?.getName()).toEqual('Bbm/F');
    expect(Chord.for('D F# B')?.getName()).toEqual('Bm/D');
    expect(Chord.for('F# B D5')?.getName()).toEqual('Bm/F#');
  });
});

describe('Suspended Chords', () => {
  it('returns the name of the suspended chord', () => {
    expect(Chord.for('C F G')?.getName()).toEqual('Csus');
    expect(Chord.for('C# F# G#')?.getName()).toEqual('C#sus');
    expect(Chord.for('Db Gb Ab')?.getName()).toEqual('Dbsus');
    expect(Chord.for('Eb Ab Bb')?.getName()).toEqual('Ebsus');
    expect(Chord.for('E A B')?.getName()).toEqual('Esus');
    expect(Chord.for('F Bb C5')?.getName()).toEqual('Fsus');
    expect(Chord.for('F# B C#5')?.getName()).toEqual('F#sus');
    expect(Chord.for('G3 C D')?.getName()).toEqual('Gsus');
    expect(Chord.for('Ab3 Db Eb')?.getName()).toEqual('Absus');
    expect(Chord.for('A3 D E')?.getName()).toEqual('Asus');
    expect(Chord.for('Bb3 Eb F')?.getName()).toEqual('Bbsus');
    expect(Chord.for('B3 E F#')?.getName()).toEqual('Bsus');
  });
});

describe('Inverted Suspended Chords', () => {
  it('returns the name of the inverted suspended chord', () => {
    expect(Chord.for('G3 C F')?.getName()).toEqual('Csus/G');
    expect(Chord.for('G#3 C# F#')?.getName()).toEqual('C#sus/G#');
    expect(Chord.for('Ab3 Db Gb')?.getName()).toEqual('Dbsus/Ab');
    expect(Chord.for('Bb3 Eb Ab')?.getName()).toEqual('Ebsus/Bb');
    expect(Chord.for('B3 E A')?.getName()).toEqual('Esus/B');
    expect(Chord.for('C F Bb')?.getName()).toEqual('Fsus/C');
    expect(Chord.for('C# F# B')?.getName()).toEqual('F#sus/C#');
    expect(Chord.for('D G C5')?.getName()).toEqual('Gsus/D');
    expect(Chord.for('Eb Ab Db5')?.getName()).toEqual('Absus/Eb');
    expect(Chord.for('E A D5')?.getName()).toEqual('Asus/E');
    expect(Chord.for('F Bb Eb5')?.getName()).toEqual('Bbsus/F');
    expect(Chord.for('F# B E5')?.getName()).toEqual('Bsus/F#');
  });
});

describe('Suspended Second Chords', () => {
  it('returns the name of the suspended second chord', () => {
    expect(Chord.for('C D G')?.getName()).toEqual('Csus2');
    expect(Chord.for('C# D# G#')?.getName()).toEqual('C#sus2');
    expect(Chord.for('Db Eb Ab')?.getName()).toEqual('Dbsus2');
    expect(Chord.for('D E A')?.getName()).toEqual('Dsus2');
    expect(Chord.for('Eb F Bb')?.getName()).toEqual('Ebsus2');
    expect(Chord.for('E F# B')?.getName()).toEqual('Esus2');
    expect(Chord.for('F G C5')?.getName()).toEqual('Fsus2');
    expect(Chord.for('F# G# C#5')?.getName()).toEqual('F#sus2');
    expect(Chord.for('Gb Ab Db5')?.getName()).toEqual('Gbsus2');
    expect(Chord.for('G A D5')?.getName()).toEqual('Gsus2');
    expect(Chord.for('Ab Bb Eb5')?.getName()).toEqual('Absus2');
    expect(Chord.for('A B E5')?.getName()).toEqual('Asus2');
    expect(Chord.for('Bb3 C F')?.getName()).toEqual('Bbsus2');
    expect(Chord.for('B3 C# F#')?.getName()).toEqual('Bsus2');
  });
});

describe('Augmented Chords', () => {
  it('returns the name of the augmented chord', () => {
    expect(Chord.for('C E G#')?.getName()).toEqual('Caug');
    expect(Chord.for('C# E# G𝄪')?.getName()).toEqual('C#aug');
    expect(Chord.for('Db F A')?.getName()).toEqual('Dbaug');
    expect(Chord.for('D F# A#')?.getName()).toEqual('Daug');
    expect(Chord.for('Eb G B')?.getName()).toEqual('Ebaug');
    expect(Chord.for('E G# B#')?.getName()).toEqual('Eaug');
    expect(Chord.for('F A C#5')?.getName()).toEqual('Faug');
    expect(Chord.for('F# A# C𝄪5')?.getName()).toEqual('F#aug');
    expect(Chord.for('Gb Bb D5')?.getName()).toEqual('Gbaug');
    expect(Chord.for('G B D#5')?.getName()).toEqual('Gaug');
    expect(Chord.for('G# B# D𝄪5')?.getName()).toEqual('G#aug');
    expect(Chord.for('Ab3 C E')?.getName()).toEqual('Abaug');
    expect(Chord.for('A3 C# E#')?.getName()).toEqual('Aaug');
    expect(Chord.for('Bb3 D F#')?.getName()).toEqual('Bbaug');
    expect(Chord.for('B3 D# F𝄪')?.getName()).toEqual('Baug');
  });
});

describe('Diminished Chords', () => {
  it('returns the name of the diminished chord', () => {
    expect(Chord.for('C Eb Gb')?.getName()).toEqual('Cdim');
    expect(Chord.for('C# E G')?.getName()).toEqual('C#dim');
    expect(Chord.for('Db Fb A𝄫')?.getName()).toEqual('Dbdim');
    expect(Chord.for('D F Ab')?.getName()).toEqual('Ddim');
    expect(Chord.for('D# F# A')?.getName()).toEqual('D#dim');
    expect(Chord.for('Eb Gb B𝄫')?.getName()).toEqual('Ebdim');
    expect(Chord.for('E G Bb')?.getName()).toEqual('Edim');
    expect(Chord.for('E# G# B')?.getName()).toEqual('E#dim');
    expect(Chord.for('F Ab Cb5')?.getName()).toEqual('Fdim');
    expect(Chord.for('F# A C5')?.getName()).toEqual('F#dim');
    expect(Chord.for('Gb B𝄫 D𝄫5')?.getName()).toEqual('Gbdim');
    expect(Chord.for('G Bb Db5')?.getName()).toEqual('Gdim');
    expect(Chord.for('G# B D5')?.getName()).toEqual('G#dim');
    expect(Chord.for('Ab3 Cb E𝄫')?.getName()).toEqual('Abdim');
    expect(Chord.for('A3 C Eb')?.getName()).toEqual('Adim');
    expect(Chord.for('A#3 C# E')?.getName()).toEqual('A#dim');
    expect(Chord.for('Bb3 Db Fb')?.getName()).toEqual('Bbdim');
    expect(Chord.for('B3 D F')?.getName()).toEqual('Bdim');
    expect(Chord.for('B#3 D# F#')?.getName()).toEqual('B#dim');
  });
});

describe('Sixth Chords', () => {
  it('returns the name of the sixth chord', () => {
    expect(Chord.for('C E G A')?.getName()).toEqual('C6');
    expect(Chord.for('C# E# G# A#')?.getName()).toEqual('C#6');
    expect(Chord.for('Db F Ab Bb')?.getName()).toEqual('Db6');
    expect(Chord.for('D F# A B')?.getName()).toEqual('D6');
    expect(Chord.for('Eb G Bb C5')?.getName()).toEqual('Eb6');
    expect(Chord.for('E G# B C#5')?.getName()).toEqual('E6');
    expect(Chord.for('F A C5 D5')?.getName()).toEqual('F6');
    expect(Chord.for('F# A# C#5 D#5')?.getName()).toEqual('F#6');
    expect(Chord.for('Gb Bb Db5 Eb5')?.getName()).toEqual('Gb6');
    expect(Chord.for('G B D5 E5')?.getName()).toEqual('G6');
    expect(Chord.for('G# B# D#5 E#5')?.getName()).toEqual('G#6');
    expect(Chord.for('Ab3 C Eb F')?.getName()).toEqual('Ab6');
    expect(Chord.for('A3 C# E F#')?.getName()).toEqual('A6');
    expect(Chord.for('Bb3 D F G')?.getName()).toEqual('Bb6');
    expect(Chord.for('B3 D# F# G#')?.getName()).toEqual('B6');
  });
});

describe('Minor Sixth Chords', () => {
  it('returns the name of the minor sixth chord', () => {
    expect(Chord.for('C Eb G A')?.getName()).toEqual('Cm6');
    expect(Chord.for('C# E G# A#')?.getName()).toEqual('C#m6');
    expect(Chord.for('Db Fb Ab Bb')?.getName()).toEqual('Dbm6');
    expect(Chord.for('D F A B')?.getName()).toEqual('Dm6');
    expect(Chord.for('Eb Gb Bb C5')?.getName()).toEqual('Ebm6');
    expect(Chord.for('E G B C#5')?.getName()).toEqual('Em6');
    expect(Chord.for('F Ab C5 D5')?.getName()).toEqual('Fm6');
    expect(Chord.for('F# A C#5 D#5')?.getName()).toEqual('F#m6');
    expect(Chord.for('G Bb D5 E5')?.getName()).toEqual('Gm6');
    expect(Chord.for('G# B D#5 E#5')?.getName()).toEqual('G#m6');
    expect(Chord.for('Ab3 Cb Eb F')?.getName()).toEqual('Abm6');
    expect(Chord.for('A3 C E F#')?.getName()).toEqual('Am6');
    expect(Chord.for('Bb3 Db F G')?.getName()).toEqual('Bbm6');
    expect(Chord.for('B3 D F# G#')?.getName()).toEqual('Bm6');
  });
});

describe('Dominant Seventh Chords', () => {
  it('returns the name of the dominant seventh', () => {
    expect(Chord.for('C E G Bb')?.getName()).toEqual('C7');
    expect(Chord.for('Db F Ab Cb5')?.getName()).toEqual('Db7');
    expect(Chord.for('D F# A C5')?.getName()).toEqual('D7');
    expect(Chord.for('Eb G Bb Db5')?.getName()).toEqual('Eb7');
    expect(Chord.for('E G# B D5')?.getName()).toEqual('E7');
    expect(Chord.for('F A C5 Eb5')?.getName()).toEqual('F7');
    expect(Chord.for('Gb Bb Db5 Fb5')?.getName()).toEqual('Gb7');
    expect(Chord.for('G B D5 F5')?.getName()).toEqual('G7');
    expect(Chord.for('Ab3 C Eb Gb')?.getName()).toEqual('Ab7');
    expect(Chord.for('A3 C# E G')?.getName()).toEqual('A7');
    expect(Chord.for('Bb3 D F Ab')?.getName()).toEqual('Bb7');
    expect(Chord.for('B3 D# F# A')?.getName()).toEqual('B7');
  });
});

describe('Augmented Seventh Chords', () => {
  it('returns the name of the augmented dominant seventh', () => {
    expect(Chord.for('C E G# Bb')?.getName()).toEqual('C+7');
    expect(Chord.for('Db F A Cb5')?.getName()).toEqual('Db+7');
    expect(Chord.for('D F# A# C5')?.getName()).toEqual('D+7');
    expect(Chord.for('Eb G B Db5')?.getName()).toEqual('Eb+7');
    expect(Chord.for('E G# B# D5')?.getName()).toEqual('E+7');
    expect(Chord.for('F A C#5 Eb5')?.getName()).toEqual('F+7');
    expect(Chord.for('Gb Bb D5 Fb5')?.getName()).toEqual('Gb+7');
    expect(Chord.for('G B D#5 F5')?.getName()).toEqual('G+7');
    expect(Chord.for('Ab3 C E Gb')?.getName()).toEqual('Ab+7');
    expect(Chord.for('A3 C# E# G')?.getName()).toEqual('A+7');
    expect(Chord.for('Bb3 D F# Ab')?.getName()).toEqual('Bb+7');
    expect(Chord.for('B3 D# F𝄪 A')?.getName()).toEqual('B+7');
  });
});

describe('Major Seventh Chords', () => {
  it('returns the name of the major seventh', () => {
    expect(Chord.for('C E G B')?.getName()).toEqual('Cmaj7');
    expect(Chord.for('C# E# G# B#')?.getName()).toEqual('C#maj7');
    expect(Chord.for('Db F Ab C5')?.getName()).toEqual('Dbmaj7');
    expect(Chord.for('D F# A C#5')?.getName()).toEqual('Dmaj7');
    expect(Chord.for('D# F𝄪 A# C𝄪5')?.getName()).toEqual('D#maj7');
    expect(Chord.for('Eb G Bb D5')?.getName()).toEqual('Ebmaj7');
    expect(Chord.for('E G# B D#5')?.getName()).toEqual('Emaj7');
    expect(Chord.for('F A C5 E5')?.getName()).toEqual('Fmaj7');
    expect(Chord.for('F# A# C#5 E#5')?.getName()).toEqual('F#maj7');
    expect(Chord.for('Gb Bb Db5 F5')?.getName()).toEqual('Gbmaj7');
    expect(Chord.for('G B D5 F#5')?.getName()).toEqual('Gmaj7');
    expect(Chord.for('G# B# D#5 F𝄪5')?.getName()).toEqual('G#maj7');
    expect(Chord.for('Ab3 C Eb G')?.getName()).toEqual('Abmaj7');
    expect(Chord.for('A3 C# E G#')?.getName()).toEqual('Amaj7');
    expect(Chord.for('A#3 C𝄪 E# G𝄪')?.getName()).toEqual('A#maj7');
    expect(Chord.for('Bb3 D F A')?.getName()).toEqual('Bbmaj7');
    expect(Chord.for('B3 D# F# A#')?.getName()).toEqual('Bmaj7');
  });
});

describe('Augmented Major Seventh Chords', () => {
  it('returns the name of the augmented major seventh', () => {
    expect(Chord.for('C E G# B')?.getName()).toEqual('Cmaj+7');
    expect(Chord.for('C# E# G𝄪 B#')?.getName()).toEqual('C#maj+7');
    expect(Chord.for('Db F A C5')?.getName()).toEqual('Dbmaj+7');
    expect(Chord.for('D F# A# C#5')?.getName()).toEqual('Dmaj+7');
    expect(Chord.for('D# F𝄪 A𝄪 C𝄪5')?.getName()).toEqual('D#maj+7');
    expect(Chord.for('Eb G B D5')?.getName()).toEqual('Ebmaj+7');
    expect(Chord.for('E G# B# D#5')?.getName()).toEqual('Emaj+7');
    expect(Chord.for('F A C#5 E5')?.getName()).toEqual('Fmaj+7');
    expect(Chord.for('F# A# C𝄪5 E#5')?.getName()).toEqual('F#maj+7');
    expect(Chord.for('Gb Bb D5 F5')?.getName()).toEqual('Gbmaj+7');
    expect(Chord.for('G B D#5 F#5')?.getName()).toEqual('Gmaj+7');
    expect(Chord.for('G# B# D𝄪5 F𝄪5')?.getName()).toEqual('G#maj+7');
    expect(Chord.for('Ab3 C E G')?.getName()).toEqual('Abmaj+7');
    expect(Chord.for('A3 C# E# G#')?.getName()).toEqual('Amaj+7');
    expect(Chord.for('A#3 C𝄪 E𝄪 G𝄪')?.getName()).toEqual('A#maj+7');
    expect(Chord.for('Bb3 D F# A')?.getName()).toEqual('Bbmaj+7');
    expect(Chord.for('B3 D# F𝄪 A#')?.getName()).toEqual('Bmaj+7');
  });
});

describe('Minor Seventh Chords', () => {
  it('returns the name of the minor seventh', () => {
    expect(Chord.for('C Eb G Bb')?.getName()).toEqual('Cm7');
    expect(Chord.for('C# E G# B')?.getName()).toEqual('C#m7');
    expect(Chord.for('Db Fb Ab Cb5')?.getName()).toEqual('Dbm7');
    expect(Chord.for('D F A C5')?.getName()).toEqual('Dm7');
    expect(Chord.for('D# F# A# C#5')?.getName()).toEqual('D#m7');
    expect(Chord.for('Eb Gb Bb Db5')?.getName()).toEqual('Ebm7');
    expect(Chord.for('E G B D5')?.getName()).toEqual('Em7');
    expect(Chord.for('F Ab C5 Eb5')?.getName()).toEqual('Fm7');
    expect(Chord.for('F# A C#5 E5')?.getName()).toEqual('F#m7');
    expect(Chord.for('Gb B𝄫 Db5 Fb5')?.getName()).toEqual('Gbm7');
    expect(Chord.for('G Bb D5 F5')?.getName()).toEqual('Gm7');
    expect(Chord.for('G# B D#5 F#5')?.getName()).toEqual('G#m7');
    expect(Chord.for('Ab3 Cb Eb Gb')?.getName()).toEqual('Abm7');
    expect(Chord.for('A3 C E G')?.getName()).toEqual('Am7');
    expect(Chord.for('A#3 C# E# G#')?.getName()).toEqual('A#m7');
    expect(Chord.for('Bb3 Db F Ab')?.getName()).toEqual('Bbm7');
    expect(Chord.for('B3 D F# A')?.getName()).toEqual('Bm7');
  });
});

describe('Diminished Seventh Chords', () => {
  it('returns the name of the diminished seventh chord', () => {
    expect(Chord.for('C Eb Gb B𝄫')?.getName()).toEqual('Cdim7');
    expect(Chord.for('C# E G Bb')?.getName()).toEqual('C#dim7');
    expect(Chord.for('Db Fb A𝄫 C𝄫5')?.getName()).toEqual('Dbdim7');
    expect(Chord.for('D F Ab Cb5')?.getName()).toEqual('Ddim7');
    expect(Chord.for('D# F# A C5')?.getName()).toEqual('D#dim7');
    expect(Chord.for('Eb Gb B𝄫 D𝄫5')?.getName()).toEqual('Ebdim7');
    expect(Chord.for('E G Bb Db5')?.getName()).toEqual('Edim7');
    expect(Chord.for('E# G# B D5')?.getName()).toEqual('E#dim7');
    expect(Chord.for('F Ab Cb5 E𝄫5')?.getName()).toEqual('Fdim7');
    expect(Chord.for('F# A C5 Eb5')?.getName()).toEqual('F#dim7');
    expect(Chord.for('Gb B𝄫 D𝄫5 F𝄫5')?.getName()).toEqual('Gbdim7');
    expect(Chord.for('G Bb Db5 Fb5')?.getName()).toEqual('Gdim7');
    expect(Chord.for('G# B D5 F5')?.getName()).toEqual('G#dim7');
    expect(Chord.for('Ab3 Cb E𝄫 G𝄫')?.getName()).toEqual('Abdim7');
    expect(Chord.for('A3 C Eb Gb')?.getName()).toEqual('Adim7');
    expect(Chord.for('A#3 C# E G')?.getName()).toEqual('A#dim7');
    expect(Chord.for('Bb3 Db Fb A𝄫')?.getName()).toEqual('Bbdim7');
    expect(Chord.for('B3 D F Ab')?.getName()).toEqual('Bdim7');
    expect(Chord.for('B#3 D# F# A')?.getName()).toEqual('B#dim7');
  });
});

describe('Half-Diminished Seventh Chords', () => {
  it('returns the name of the half-diminished seventh chord', () => {
    expect(Chord.for('C Eb Gb Bb')?.getName()).toEqual('Cø7');
    expect(Chord.for('C# E G B')?.getName()).toEqual('C#ø7');
    expect(Chord.for('Db Fb A𝄫 Cb5')?.getName()).toEqual('Dbø7');
    expect(Chord.for('D F Ab C5')?.getName()).toEqual('Dø7');
    expect(Chord.for('D# F# A C#5')?.getName()).toEqual('D#ø7');
    expect(Chord.for('Eb Gb B𝄫 Db5')?.getName()).toEqual('Ebø7');
    expect(Chord.for('E G Bb D5')?.getName()).toEqual('Eø7');
    expect(Chord.for('E# G# B D#5')?.getName()).toEqual('E#ø7');
    expect(Chord.for('F Ab Cb5 Eb5')?.getName()).toEqual('Fø7');
    expect(Chord.for('F# A C5 E5')?.getName()).toEqual('F#ø7');
    expect(Chord.for('Gb B𝄫 D𝄫5 Fb5')?.getName()).toEqual('Gbø7');
    expect(Chord.for('G Bb Db5 F5')?.getName()).toEqual('Gø7');
    expect(Chord.for('G# B D5 F#5')?.getName()).toEqual('G#ø7');
    expect(Chord.for('Ab3 Cb E𝄫 Gb')?.getName()).toEqual('Abø7');
    expect(Chord.for('A3 C Eb G')?.getName()).toEqual('Aø7');
    expect(Chord.for('A#3 C# E G#')?.getName()).toEqual('A#ø7');
    expect(Chord.for('Bb3 Db Fb Ab')?.getName()).toEqual('Bbø7');
    expect(Chord.for('B3 D F A')?.getName()).toEqual('Bø7');
    expect(Chord.for('B#3 D# F# A#')?.getName()).toEqual('B#ø7');
  });
});

describe('Minor Major Seventh Chords', () => {
  it('returns the name of the minor major seventh', () => {
    expect(Chord.for('C Eb G B')?.getName()).toEqual('Cm7+');
    expect(Chord.for('C# E G# B#')?.getName()).toEqual('C#m7+');
    expect(Chord.for('Db Fb Ab C5')?.getName()).toEqual('Dbm7+');
    expect(Chord.for('D F A C#5')?.getName()).toEqual('Dm7+');
    expect(Chord.for('D# F# A# C𝄪5')?.getName()).toEqual('D#m7+');
    expect(Chord.for('Eb Gb Bb D5')?.getName()).toEqual('Ebm7+');
    expect(Chord.for('E G B D#5')?.getName()).toEqual('Em7+');
    expect(Chord.for('F Ab C5 E5')?.getName()).toEqual('Fm7+');
    expect(Chord.for('F# A C#5 E#5')?.getName()).toEqual('F#m7+');
    expect(Chord.for('Gb B𝄫 Db5 F5')?.getName()).toEqual('Gbm7+');
    expect(Chord.for('G Bb D5 F#5')?.getName()).toEqual('Gm7+');
    expect(Chord.for('G# B D#5 F𝄪5')?.getName()).toEqual('G#m7+');
    expect(Chord.for('Ab3 Cb Eb G')?.getName()).toEqual('Abm7+');
    expect(Chord.for('A3 C E G#')?.getName()).toEqual('Am7+');
    expect(Chord.for('A#3 C# E# G𝄪')?.getName()).toEqual('A#m7+');
    expect(Chord.for('Bb3 Db F A')?.getName()).toEqual('Bbm7+');
    expect(Chord.for('B3 D F# A#')?.getName()).toEqual('Bm7+');
  });
});

describe('Dominant Seventh Suspended Fourth Chords', () => {
  it('returns the name of the dominant seventh suspended fourth chord', () => {
    expect(Chord.for('C F G Bb')?.getName()).toEqual('C7sus4');
    expect(Chord.for('C# F# G# B')?.getName()).toEqual('C#7sus4');
    expect(Chord.for('Db Gb Ab Cb5')?.getName()).toEqual('Db7sus4');
    expect(Chord.for('D G A C5')?.getName()).toEqual('D7sus4');
    expect(Chord.for('Eb Ab Bb Db5')?.getName()).toEqual('Eb7sus4');
    expect(Chord.for('E A B D5')?.getName()).toEqual('E7sus4');
    expect(Chord.for('F Bb C5 Eb5')?.getName()).toEqual('F7sus4');
    expect(Chord.for('F# B C#5 E5')?.getName()).toEqual('F#7sus4');
    expect(Chord.for('G3 C D F')?.getName()).toEqual('G7sus4');
    expect(Chord.for('Ab3 Db Eb Gb')?.getName()).toEqual('Ab7sus4');
    expect(Chord.for('A3 D E G')?.getName()).toEqual('A7sus4');
    expect(Chord.for('Bb3 Eb F Ab')?.getName()).toEqual('Bb7sus4');
    expect(Chord.for('B3 E F# A')?.getName()).toEqual('B7sus4');
  });
});

describe('Dominant Seventh Suspended Second Chords', () => {
  it('returns the name of the dominant seventh suspended second chord', () => {
    expect(Chord.for('C D G Bb')?.getName()).toEqual('C7sus2');
    expect(Chord.for('C# D# G# B')?.getName()).toEqual('C#7sus2');
    expect(Chord.for('Db Eb Ab Cb5')?.getName()).toEqual('Db7sus2');
    expect(Chord.for('D E A C5')?.getName()).toEqual('D7sus2');
    expect(Chord.for('Eb F Bb Db5')?.getName()).toEqual('Eb7sus2');
    expect(Chord.for('E F# B D5')?.getName()).toEqual('E7sus2');
    expect(Chord.for('F G C5 Eb5')?.getName()).toEqual('F7sus2');
    expect(Chord.for('F# G# C#5 E5')?.getName()).toEqual('F#7sus2');
    expect(Chord.for('G A D5 F5')?.getName()).toEqual('G7sus2');
    expect(Chord.for('Ab Bb Eb5 Gb5')?.getName()).toEqual('Ab7sus2');
    expect(Chord.for('A3 B3 E G')?.getName()).toEqual('A7sus2');
    expect(Chord.for('Bb3 C F Ab')?.getName()).toEqual('Bb7sus2');
    expect(Chord.for('B3 C#4 F# A')?.getName()).toEqual('B7sus2');
  });
});

describe('Dominant Ninth Chords', () => {
  it('returns the name of the dominant ninth chord', () => {
    expect(Chord.for('C E G Bb D5')?.getName()).toEqual('C9');
    expect(Chord.for('C# E# G# B D#5')?.getName()).toEqual('C#9');
    expect(Chord.for('Db F Ab Cb5 Eb5')?.getName()).toEqual('Db9');
    expect(Chord.for('D F# A C5 E5')?.getName()).toEqual('D9');
    expect(Chord.for('Eb G Bb Db5 F5')?.getName()).toEqual('Eb9');
    expect(Chord.for('E G# B D5 F#5')?.getName()).toEqual('E9');
    expect(Chord.for('F A C5 Eb5 G5')?.getName()).toEqual('F9');
    expect(Chord.for('F# A# C#5 E5 G#5')?.getName()).toEqual('F#9');
    expect(Chord.for('G B D5 F5 A5')?.getName()).toEqual('G9');
    expect(Chord.for('Ab3 C Eb Gb Bb')?.getName()).toEqual('Ab9');
    expect(Chord.for('A3 C# E G B')?.getName()).toEqual('A9');
    expect(Chord.for('Bb3 D F Ab C5')?.getName()).toEqual('Bb9');
    expect(Chord.for('B3 D# F# A C#5')?.getName()).toEqual('B9');
  });
});

describe('Minor Ninth Chords', () => {
  it('returns the name of the minor ninth chord', () => {
    expect(Chord.for('C Eb G Bb D5')?.getName()).toEqual('Cm9');
    expect(Chord.for('C# E G# B D#5')?.getName()).toEqual('C#m9');
    expect(Chord.for('Db Fb Ab Cb5 Eb5')?.getName()).toEqual('Dbm9');
    expect(Chord.for('D F A C5 E5')?.getName()).toEqual('Dm9');
    expect(Chord.for('Eb Gb Bb Db5 F5')?.getName()).toEqual('Ebm9');
    expect(Chord.for('E G B D5 F#5')?.getName()).toEqual('Em9');
    expect(Chord.for('F Ab C5 Eb5 G5')?.getName()).toEqual('Fm9');
    expect(Chord.for('F# A C#5 E5 G#5')?.getName()).toEqual('F#m9');
    expect(Chord.for('G Bb D5 F5 A5')?.getName()).toEqual('Gm9');
    expect(Chord.for('Ab3 Cb Eb Gb Bb')?.getName()).toEqual('Abm9');
    expect(Chord.for('A3 C E G B')?.getName()).toEqual('Am9');
    expect(Chord.for('Bb3 Db F Ab C5')?.getName()).toEqual('Bbm9');
    expect(Chord.for('B3 D F# A C#5')?.getName()).toEqual('Bm9');
  });
});

describe('Dominant Minor Ninth Chords', () => {
  it('returns the name of the dominant minor ninth chord', () => {
    expect(Chord.for('C E G Bb Db5')?.getName()).toEqual('C7b9');
    expect(Chord.for('C# E# G# B D5')?.getName()).toEqual('C#7b9');
    expect(Chord.for('Db F Ab Cb5 E𝄫5')?.getName()).toEqual('Db7b9');
    expect(Chord.for('D F# A C5 Eb5')?.getName()).toEqual('D7b9');
    expect(Chord.for('Eb G Bb Db5 Fb5')?.getName()).toEqual('Eb7b9');
    expect(Chord.for('E G# B D5 F5')?.getName()).toEqual('E7b9');
    expect(Chord.for('F A C5 Eb5 Gb5')?.getName()).toEqual('F7b9');
    expect(Chord.for('F# A# C#5 E5 G5')?.getName()).toEqual('F#7b9');
    expect(Chord.for('G B D5 F5 Ab5')?.getName()).toEqual('G7b9');
    expect(Chord.for('Ab3 C Eb Gb B𝄫')?.getName()).toEqual('Ab7b9');
    expect(Chord.for('A3 C# E G Bb')?.getName()).toEqual('A7b9');
    expect(Chord.for('Bb3 D F Ab Cb5')?.getName()).toEqual('Bb7b9');
    expect(Chord.for('B3 D# F# A C5')?.getName()).toEqual('B7b9');
  });
});

describe('Add Ninth Chords', () => {
  it('returns the name of the add ninth chord', () => {
    expect(Chord.for('C E G D5')?.getName()).toEqual('Cadd9');
    expect(Chord.for('C# E# G# D#5')?.getName()).toEqual('C#add9');
    expect(Chord.for('Db F Ab Eb5')?.getName()).toEqual('Dbadd9');
    expect(Chord.for('D F# A E5')?.getName()).toEqual('Dadd9');
    expect(Chord.for('Eb G Bb F5')?.getName()).toEqual('Ebadd9');
    expect(Chord.for('E G# B F#5')?.getName()).toEqual('Eadd9');
    expect(Chord.for('F A C5 G5')?.getName()).toEqual('Fadd9');
    expect(Chord.for('F# A# C#5 G#5')?.getName()).toEqual('F#add9');
    expect(Chord.for('G B D5 A5')?.getName()).toEqual('Gadd9');
    expect(Chord.for('Ab3 C Eb Bb')?.getName()).toEqual('Abadd9');
    expect(Chord.for('A3 C# E B')?.getName()).toEqual('Aadd9');
    expect(Chord.for('Bb3 D F C5')?.getName()).toEqual('Bbadd9');
    expect(Chord.for('B3 D# F# C#5')?.getName()).toEqual('Badd9');
  });
});

describe('Major Ninth Chords', () => {
  it('returns the name of the major ninth chord', () => {
    expect(Chord.for('C E G B D5')?.getName()).toEqual('Cmaj9');
    expect(Chord.for('C# E# G# B# D#5')?.getName()).toEqual('C#maj9');
    expect(Chord.for('Db F Ab C5 Eb5')?.getName()).toEqual('Dbmaj9');
    expect(Chord.for('D F# A C#5 E5')?.getName()).toEqual('Dmaj9');
    expect(Chord.for('Eb G Bb D5 F5')?.getName()).toEqual('Ebmaj9');
    expect(Chord.for('E G# B D#5 F#5')?.getName()).toEqual('Emaj9');
    expect(Chord.for('F A C5 E5 G5')?.getName()).toEqual('Fmaj9');
    expect(Chord.for('F# A# C#5 E#5 G#5')?.getName()).toEqual('F#maj9');
    expect(Chord.for('G B D5 F#5 A5')?.getName()).toEqual('Gmaj9');
    expect(Chord.for('Ab3 C Eb G Bb')?.getName()).toEqual('Abmaj9');
    expect(Chord.for('A3 C# E G# B')?.getName()).toEqual('Amaj9');
    expect(Chord.for('Bb3 D F A C5')?.getName()).toEqual('Bbmaj9');
    expect(Chord.for('B3 D# F# A# C#5')?.getName()).toEqual('Bmaj9');
  });
});

describe('Dominant Eleventh Chords', () => {
  it('returns the name of the dominant eleventh chord', () => {
    expect(Chord.for('C E G Bb D5 F5')?.getName()).toEqual('C11');
    expect(Chord.for('C# E# G# B D#5 F#5')?.getName()).toEqual('C#11');
    expect(Chord.for('Db F Ab Cb5 Eb5 Gb5')?.getName()).toEqual('Db11');
    expect(Chord.for('D F# A C5 E5 G5')?.getName()).toEqual('D11');
    expect(Chord.for('Eb G Bb Db5 F5 Ab5')?.getName()).toEqual('Eb11');
    expect(Chord.for('E G# B D5 F#5 A5')?.getName()).toEqual('E11');
    expect(Chord.for('F A C5 Eb5 G5 Bb5')?.getName()).toEqual('F11');
    expect(Chord.for('F# A# C#5 E5 G#5 B5')?.getName()).toEqual('F#11');
    expect(Chord.for('G B D5 F5 A5 C6')?.getName()).toEqual('G11');
    expect(Chord.for('Ab3 C Eb Gb Bb Db5')?.getName()).toEqual('Ab11');
    expect(Chord.for('A3 C# E G B D5')?.getName()).toEqual('A11');
    expect(Chord.for('Bb3 D F Ab C5 Eb5')?.getName()).toEqual('Bb11');
    expect(Chord.for('B3 D# F# A C#5 E5')?.getName()).toEqual('B11');
  });
});

describe('Minor Eleventh Chords', () => {
  it('returns the name of the minor eleventh chord', () => {
    expect(Chord.for('C Eb G Bb D5 F5')?.getName()).toEqual('Cm11');
    expect(Chord.for('C# E G# B D#5 F#5')?.getName()).toEqual('C#m11');
    expect(Chord.for('Db Fb Ab Cb5 Eb5 Gb5')?.getName()).toEqual('Dbm11');
    expect(Chord.for('D F A C5 E5 G5')?.getName()).toEqual('Dm11');
    expect(Chord.for('Eb Gb Bb Db5 F5 Ab5')?.getName()).toEqual('Ebm11');
    expect(Chord.for('E G B D5 F#5 A5')?.getName()).toEqual('Em11');
    expect(Chord.for('F Ab C5 Eb5 G5 Bb5')?.getName()).toEqual('Fm11');
    expect(Chord.for('F# A C#5 E5 G#5 B5')?.getName()).toEqual('F#m11');
    expect(Chord.for('G Bb D5 F5 A5 C6')?.getName()).toEqual('Gm11');
    expect(Chord.for('Ab3 Cb Eb Gb Bb Db5')?.getName()).toEqual('Abm11');
    expect(Chord.for('A3 C E G B D5')?.getName()).toEqual('Am11');
    expect(Chord.for('Bb3 Db F Ab C5 Eb5')?.getName()).toEqual('Bbm11');
    expect(Chord.for('B3 D F# A C#5 E5')?.getName()).toEqual('Bm11');
  });
});

describe('Major Eleventh Chords', () => {
  it('returns the name of the major eleventh chord', () => {
    expect(Chord.for('C E G B D5 F5')?.getName()).toEqual('Cmaj11');
    expect(Chord.for('C# E# G# B# D#5 F#5')?.getName()).toEqual('C#maj11');
    expect(Chord.for('Db F Ab C5 Eb5 Gb5')?.getName()).toEqual('Dbmaj11');
    expect(Chord.for('D F# A C#5 E5 G5')?.getName()).toEqual('Dmaj11');
    expect(Chord.for('Eb G Bb D5 F5 Ab5')?.getName()).toEqual('Ebmaj11');
    expect(Chord.for('E G# B D#5 F#5 A5')?.getName()).toEqual('Emaj11');
    expect(Chord.for('F A C5 E5 G5 Bb5')?.getName()).toEqual('Fmaj11');
    expect(Chord.for('F# A# C#5 E#5 G#5 B5')?.getName()).toEqual('F#maj11');
    expect(Chord.for('G B D5 F#5 A5 C6')?.getName()).toEqual('Gmaj11');
    expect(Chord.for('Ab3 C Eb G Bb Db5')?.getName()).toEqual('Abmaj11');
    expect(Chord.for('A3 C# E G# B D5')?.getName()).toEqual('Amaj11');
    expect(Chord.for('Bb3 D F A C5 Eb5')?.getName()).toEqual('Bbmaj11');
    expect(Chord.for('B3 D# F# A# C#5 E5')?.getName()).toEqual('Bmaj11');
  });
});

describe('Dominant Sharp Eleventh Chords', () => {
  it('returns the name of the dominant sharp eleventh chord', () => {
    expect(Chord.for('C E G Bb D5 F#5')?.getName()).toEqual('C9#11');
    expect(Chord.for('C# E# G# B D#5 F𝄪5')?.getName()).toEqual('C#9#11');
    expect(Chord.for('Db F Ab Cb5 Eb5 G5')?.getName()).toEqual('Db9#11');
    expect(Chord.for('D F# A C5 E5 G#5')?.getName()).toEqual('D9#11');
    expect(Chord.for('Eb G Bb Db5 F5 A5')?.getName()).toEqual('Eb9#11');
    expect(Chord.for('E G# B D5 F#5 A#5')?.getName()).toEqual('E9#11');
    expect(Chord.for('F A C5 Eb5 G5 B5')?.getName()).toEqual('F9#11');
    expect(Chord.for('F# A# C#5 E5 G#5 B#5')?.getName()).toEqual('F#9#11');
    expect(Chord.for('G B D5 F5 A5 C#6')?.getName()).toEqual('G9#11');
    expect(Chord.for('Ab3 C Eb Gb Bb D5')?.getName()).toEqual('Ab9#11');
    expect(Chord.for('A3 C# E G B D#5')?.getName()).toEqual('A9#11');
    expect(Chord.for('Bb3 D F Ab C5 E5')?.getName()).toEqual('Bb9#11');
    expect(Chord.for('B3 D# F# A C#5 E#5')?.getName()).toEqual('B9#11');
  });
});

describe('Major Ninth Sharp Eleventh Chords', () => {
  it('returns the name of the major ninth sharp eleventh chord', () => {
    expect(Chord.for('C E G B D5 F#5')?.getName()).toEqual('Cmaj9#11');
    expect(Chord.for('C# E# G# B# D#5 F𝄪5')?.getName()).toEqual('C#maj9#11');
    expect(Chord.for('Db F Ab C5 Eb5 G5')?.getName()).toEqual('Dbmaj9#11');
    expect(Chord.for('D F# A C#5 E5 G#5')?.getName()).toEqual('Dmaj9#11');
    expect(Chord.for('Eb G Bb D5 F5 A5')?.getName()).toEqual('Ebmaj9#11');
    expect(Chord.for('E G# B D#5 F#5 A#5')?.getName()).toEqual('Emaj9#11');
    expect(Chord.for('F A C5 E5 G5 B5')?.getName()).toEqual('Fmaj9#11');
    expect(Chord.for('F# A# C#5 E#5 G#5 B#5')?.getName()).toEqual('F#maj9#11');
    expect(Chord.for('G B D5 F#5 A5 C#6')?.getName()).toEqual('Gmaj9#11');
    expect(Chord.for('Ab3 C Eb G Bb D5')?.getName()).toEqual('Abmaj9#11');
    expect(Chord.for('A3 C# E G# B D#5')?.getName()).toEqual('Amaj9#11');
    expect(Chord.for('Bb3 D F A C5 E5')?.getName()).toEqual('Bbmaj9#11');
    expect(Chord.for('B3 D# F# A# C#5 E#5')?.getName()).toEqual('Bmaj9#11');
  });
});

describe('Dominant Seventh Flat Five Chords', () => {
  it('returns the name of the dominant seventh flat five chord', () => {
    expect(Chord.for('C E Gb Bb')?.getName()).toEqual('C7b5');
    expect(Chord.for('D F# Ab C5')?.getName()).toEqual('D7b5');
    expect(Chord.for('E G# Bb D5')?.getName()).toEqual('E7b5');
    expect(Chord.for('F A Cb5 Eb5')?.getName()).toEqual('F7b5');
    expect(Chord.for('G B Db5 F5')?.getName()).toEqual('G7b5');
    expect(Chord.for('A3 C# Eb G')?.getName()).toEqual('A7b5');
    expect(Chord.for('Bb3 D Fb Ab')?.getName()).toEqual('Bb7b5');
  });
});

describe('Dominant Seventh Sharp Nine Chords', () => {
  it('returns the name of the dominant seventh sharp nine chord', () => {
    expect(Chord.for('C E G Bb D#5')?.getName()).toEqual('C7#9');
    expect(Chord.for('D F# A C5 E#5')?.getName()).toEqual('D7#9');
    expect(Chord.for('E G# B D5 F𝄪5')?.getName()).toEqual('E7#9');
    expect(Chord.for('F A C5 Eb5 G#5')?.getName()).toEqual('F7#9');
    expect(Chord.for('G B D5 F5 A#5')?.getName()).toEqual('G7#9');
    expect(Chord.for('A3 C# E G B#')?.getName()).toEqual('A7#9');
    expect(Chord.for('Bb3 D F Ab C#5')?.getName()).toEqual('Bb7#9');
  });
});

describe('Dominant Seventh Flat Five Flat Nine Chords', () => {
  it('returns the name of the dominant seventh flat five flat nine chord', () => {
    expect(Chord.for('C E Gb Bb Db5')?.getName()).toEqual('C7b5b9');
    expect(Chord.for('D F# Ab C5 Eb5')?.getName()).toEqual('D7b5b9');
    expect(Chord.for('E G# Bb D5 F5')?.getName()).toEqual('E7b5b9');
    expect(Chord.for('F A Cb5 Eb5 Gb5')?.getName()).toEqual('F7b5b9');
    expect(Chord.for('G B Db5 F5 Ab5')?.getName()).toEqual('G7b5b9');
    expect(Chord.for('A3 C# Eb G Bb')?.getName()).toEqual('A7b5b9');
  });
});

describe('Dominant Seventh Flat Five Sharp Nine Chords', () => {
  it('returns the name of the dominant seventh flat five sharp nine chord', () => {
    expect(Chord.for('C E Gb Bb D#5')?.getName()).toEqual('C7b5#9');
    expect(Chord.for('D F# Ab C5 E#5')?.getName()).toEqual('D7b5#9');
    expect(Chord.for('E G# Bb D5 F𝄪5')?.getName()).toEqual('E7b5#9');
    expect(Chord.for('F A Cb5 Eb5 G#5')?.getName()).toEqual('F7b5#9');
    expect(Chord.for('G B Db5 F5 A#5')?.getName()).toEqual('G7b5#9');
    expect(Chord.for('A3 C# Eb G B#')?.getName()).toEqual('A7b5#9');
  });
});

describe('Dominant Seventh Sharp Five Flat Nine Chords', () => {
  it('returns the name of the dominant seventh sharp five flat nine chord', () => {
    expect(Chord.for('C E G# Bb Db5')?.getName()).toEqual('C7#5b9');
    expect(Chord.for('D F# A# C5 Eb5')?.getName()).toEqual('D7#5b9');
    expect(Chord.for('E G# B# D5 F5')?.getName()).toEqual('E7#5b9');
    expect(Chord.for('F A C# Eb5 Gb5')?.getName()).toEqual('F7#5b9');
    expect(Chord.for('G B D# F5 Ab5')?.getName()).toEqual('G7#5b9');
    expect(Chord.for('A3 C# E# G Bb')?.getName()).toEqual('A7#5b9');
  });
});

describe('Dominant Seventh Sharp Five Sharp Nine Chords', () => {
  it('returns the name of the dominant seventh sharp five sharp nine chord', () => {
    expect(Chord.for('C E G# Bb D#5')?.getName()).toEqual('C7#5#9');
    expect(Chord.for('D F# A# C5 E#5')?.getName()).toEqual('D7#5#9');
    expect(Chord.for('E G# B# D5 F𝄪5')?.getName()).toEqual('E7#5#9');
    expect(Chord.for('F A C# Eb5 G#5')?.getName()).toEqual('F7#5#9');
    expect(Chord.for('G B D# F5 A#5')?.getName()).toEqual('G7#5#9');
    expect(Chord.for('A3 C# E# G B#')?.getName()).toEqual('A7#5#9');
  });
});

describe('Six Nine Chords', () => {
  it('returns the name of the six nine chord', () => {
    expect(Chord.for('C E G A D5')?.getName()).toEqual('C6/9');
    expect(Chord.for('D F# A B E5')?.getName()).toEqual('D6/9');
    expect(Chord.for('E G# B C#5 F#5')?.getName()).toEqual('E6/9');
    expect(Chord.for('F A C5 D5 G5')?.getName()).toEqual('F6/9');
    expect(Chord.for('G B D5 E5 A5')?.getName()).toEqual('G6/9');
    expect(Chord.for('A3 C# E F# B')?.getName()).toEqual('A6/9');
    expect(Chord.for('Bb3 D F G C5')?.getName()).toEqual('Bb6/9');
  });
});

describe('Minor Six Nine Chords', () => {
  it('returns the name of the minor six nine chord', () => {
    expect(Chord.for('C Eb G A D5')?.getName()).toEqual('Cm6/9');
    expect(Chord.for('D F A B E5')?.getName()).toEqual('Dm6/9');
    expect(Chord.for('E G B C#5 F#5')?.getName()).toEqual('Em6/9');
    expect(Chord.for('F Ab C5 D5 G5')?.getName()).toEqual('Fm6/9');
    expect(Chord.for('G Bb D5 E5 A5')?.getName()).toEqual('Gm6/9');
    expect(Chord.for('A3 C E F# B')?.getName()).toEqual('Am6/9');
    expect(Chord.for('Bb3 Db F G C5')?.getName()).toEqual('Bbm6/9');
  });
});

describe('Augmented Ninth Chords', () => {
  it('returns the name of the augmented ninth chord', () => {
    expect(Chord.for('C E G# Bb D5')?.getName()).toEqual('C+9');
    expect(Chord.for('D F# A# C5 E5')?.getName()).toEqual('D+9');
    expect(Chord.for('E G# B# D5 F#5')?.getName()).toEqual('E+9');
    expect(Chord.for('F A C# Eb5 G5')?.getName()).toEqual('F+9');
    expect(Chord.for('G B D# F5 A5')?.getName()).toEqual('G+9');
    expect(Chord.for('A3 C# E# G B')?.getName()).toEqual('A+9');
  });
});

describe('Minor Ninth Flat Five Chords', () => {
  it('returns the name of the minor ninth flat five chord', () => {
    expect(Chord.for('C Eb Gb Bb D5')?.getName()).toEqual('Cm9b5');
    expect(Chord.for('D F Ab C5 E5')?.getName()).toEqual('Dm9b5');
    expect(Chord.for('E G Bb D5 F#5')?.getName()).toEqual('Em9b5');
    expect(Chord.for('F Ab Cb5 Eb5 G5')?.getName()).toEqual('Fm9b5');
    expect(Chord.for('G Bb Db5 F5 A5')?.getName()).toEqual('Gm9b5');
    expect(Chord.for('A3 C Eb G B')?.getName()).toEqual('Am9b5');
  });
});

describe('Major Ninth Sharp Five Chords', () => {
  it('returns the name of the major ninth sharp five chord', () => {
    expect(Chord.for('C E G# B D5')?.getName()).toEqual('Cmaj9#5');
    expect(Chord.for('D F# A# C#5 E5')?.getName()).toEqual('Dmaj9#5');
    expect(Chord.for('E G# B# D#5 F#5')?.getName()).toEqual('Emaj9#5');
    expect(Chord.for('F A C# E5 G5')?.getName()).toEqual('Fmaj9#5');
    expect(Chord.for('G B D# F#5 A5')?.getName()).toEqual('Gmaj9#5');
    expect(Chord.for('A3 C# E# G# B')?.getName()).toEqual('Amaj9#5');
  });
});

describe('Major Seventh Suspended Fourth Chords', () => {
  it('returns the name of the major seventh suspended fourth chord', () => {
    expect(Chord.for('C F G B')?.getName()).toEqual('Cmaj7sus4');
    expect(Chord.for('D G A C#5')?.getName()).toEqual('Dmaj7sus4');
    expect(Chord.for('E A B D#5')?.getName()).toEqual('Emaj7sus4');
    expect(Chord.for('F Bb C5 E5')?.getName()).toEqual('Fmaj7sus4');
    expect(Chord.for('G3 C D F#')?.getName()).toEqual('Gmaj7sus4');
    expect(Chord.for('A3 D E G#')?.getName()).toEqual('Amaj7sus4');
    expect(Chord.for('Bb3 Eb F A')?.getName()).toEqual('Bbmaj7sus4');
  });
});

describe('Major Seventh Suspended Second Chords', () => {
  it('returns the name of the major seventh suspended second chord', () => {
    expect(Chord.for('C D G B')?.getName()).toEqual('Cmaj7sus2');
    expect(Chord.for('D E A C#5')?.getName()).toEqual('Dmaj7sus2');
    expect(Chord.for('E F# B D#5')?.getName()).toEqual('Emaj7sus2');
    expect(Chord.for('F G C5 E5')?.getName()).toEqual('Fmaj7sus2');
    expect(Chord.for('G A D5 F#5')?.getName()).toEqual('Gmaj7sus2');
    expect(Chord.for('A3 B E G#')?.getName()).toEqual('Amaj7sus2');
    expect(Chord.for('Bb3 C F A')?.getName()).toEqual('Bbmaj7sus2');
  });
});

describe('Ninth Suspended Fourth Chords', () => {
  it('returns the name of the ninth suspended fourth chord', () => {
    expect(Chord.for('C F G Bb D5')?.getName()).toEqual('C9sus4');
    expect(Chord.for('D G A C5 E5')?.getName()).toEqual('D9sus4');
    expect(Chord.for('E A B D5 F#5')?.getName()).toEqual('E9sus4');
    expect(Chord.for('F Bb C5 Eb5 G5')?.getName()).toEqual('F9sus4');
    expect(Chord.for('G3 C D F A')?.getName()).toEqual('G9sus4');
    expect(Chord.for('A3 D E G B')?.getName()).toEqual('A9sus4');
    expect(Chord.for('Bb3 Eb F Ab C5')?.getName()).toEqual('Bb9sus4');
  });
});

describe('Suspended Fourth Add Ninth Chords', () => {
  it('returns the name of the suspended fourth add ninth chord', () => {
    expect(Chord.for('C F G D5')?.getName()).toEqual('Csus4add9');
    expect(Chord.for('D G A E5')?.getName()).toEqual('Dsus4add9');
    expect(Chord.for('E A B F#5')?.getName()).toEqual('Esus4add9');
    expect(Chord.for('F Bb C5 G5')?.getName()).toEqual('Fsus4add9');
    expect(Chord.for('G3 C D A')?.getName()).toEqual('Gsus4add9');
    expect(Chord.for('A3 D E B')?.getName()).toEqual('Asus4add9');
    expect(Chord.for('Bb3 Eb F C5')?.getName()).toEqual('Bbsus4add9');
  });
});

describe('Dominant Seventh Sharp Eleventh Chords', () => {
  it('returns the name of the dominant seventh sharp eleventh chord', () => {
    expect(Chord.for('C E G Bb F#5')?.getName()).toEqual('C7#11');
    expect(Chord.for('D F# A C5 G#5')?.getName()).toEqual('D7#11');
    expect(Chord.for('E G# B D5 A#5')?.getName()).toEqual('E7#11');
    expect(Chord.for('F A C5 Eb5 B5')?.getName()).toEqual('F7#11');
    expect(Chord.for('G B D5 F5 C#6')?.getName()).toEqual('G7#11');
    expect(Chord.for('A3 C# E G D#5')?.getName()).toEqual('A7#11');
  });
});

describe('Major Seventh Sharp Eleventh Chords', () => {
  it('returns the name of the major seventh sharp eleventh chord', () => {
    expect(Chord.for('C E G B F#5')?.getName()).toEqual('Cmaj7#11');
    expect(Chord.for('D F# A C#5 G#5')?.getName()).toEqual('Dmaj7#11');
    expect(Chord.for('E G# B D#5 A#5')?.getName()).toEqual('Emaj7#11');
    expect(Chord.for('F A C5 E5 B5')?.getName()).toEqual('Fmaj7#11');
    expect(Chord.for('G B D5 F#5 C#6')?.getName()).toEqual('Gmaj7#11');
    expect(Chord.for('A3 C# E G# D#5')?.getName()).toEqual('Amaj7#11');
  });
});

describe('Minor Eleventh Flat Five Chords', () => {
  it('returns the name of the minor eleventh flat five chord', () => {
    expect(Chord.for('C Eb Gb Bb D5 F5')?.getName()).toEqual('Cm11b5');
    expect(Chord.for('D F Ab C5 E5 G5')?.getName()).toEqual('Dm11b5');
    expect(Chord.for('E G Bb D5 F#5 A5')?.getName()).toEqual('Em11b5');
    expect(Chord.for('F Ab Cb5 Eb5 G5 Bb5')?.getName()).toEqual('Fm11b5');
    expect(Chord.for('G Bb Db5 F5 A5 C6')?.getName()).toEqual('Gm11b5');
    expect(Chord.for('A3 C Eb G B D5')?.getName()).toEqual('Am11b5');
  });
});
