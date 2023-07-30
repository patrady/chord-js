import { Chord } from '../chord';
import { Note } from '../note';

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
    expect(Chord.for('Db Fb Abb')?.getName()).toEqual('Dbdim');
    expect(Chord.for('D F Ab')?.getName()).toEqual('Ddim');
    expect(Chord.for('D# F# A')?.getName()).toEqual('D#dim');
    expect(Chord.for('Eb Gb Bbb')?.getName()).toEqual('Ebdim');
    expect(Chord.for('E G Bb')?.getName()).toEqual('Edim');
    expect(Chord.for('E# G# B')?.getName()).toEqual('E#dim');
    expect(Chord.for('F Ab Cb5')?.getName()).toEqual('Fdim');
    expect(Chord.for('F# A C5')?.getName()).toEqual('F#dim');
    expect(Chord.for('Gb Bbb Dbb5')?.getName()).toEqual('Gbdim');
    expect(Chord.for('G Bb Db5')?.getName()).toEqual('Gdim');
    expect(Chord.for('G# B D5')?.getName()).toEqual('G#dim');
    expect(Chord.for('Ab3 Cb Ebb')?.getName()).toEqual('Abdim');
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
    expect(Chord.for('Gb Bbb Db5 Fb5')?.getName()).toEqual('Gbm7');
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
    expect(Chord.for('C Eb Gb Bbb')?.getName()).toEqual('Cdim7');
    expect(Chord.for('C# E G Bb')?.getName()).toEqual('C#dim7');
    expect(Chord.for('Db Fb Abb Cbb5')?.getName()).toEqual('Dbdim7');
    expect(Chord.for('D F Ab Cb5')?.getName()).toEqual('Ddim7');
    expect(Chord.for('D# F# A C5')?.getName()).toEqual('D#dim7');
    expect(Chord.for('Eb Gb Bbb Dbb5')?.getName()).toEqual('Ebdim7');
    expect(Chord.for('E G Bb Db5')?.getName()).toEqual('Edim7');
    expect(Chord.for('E# G# B D5')?.getName()).toEqual('E#dim7');
    expect(Chord.for('F Ab Cb5 Ebb5')?.getName()).toEqual('Fdim7');
    expect(Chord.for('F# A C5 Eb5')?.getName()).toEqual('F#dim7');
    expect(Chord.for('Gb Bbb Dbb5 Fbb5')?.getName()).toEqual('Gbdim7');
    expect(Chord.for('G Bb Db5 Fb5')?.getName()).toEqual('Gdim7');
    expect(Chord.for('G# B D5 F5')?.getName()).toEqual('G#dim7');
    expect(Chord.for('Ab3 Cb Ebb Gbb')?.getName()).toEqual('Abdim7');
    expect(Chord.for('A3 C Eb Gb')?.getName()).toEqual('Adim7');
    expect(Chord.for('A#3 C# E G')?.getName()).toEqual('A#dim7');
    expect(Chord.for('Bb3 Db Fb Abb')?.getName()).toEqual('Bbdim7');
    expect(Chord.for('B3 D F Ab')?.getName()).toEqual('Bdim7');
    expect(Chord.for('B#3 D# F# A')?.getName()).toEqual('B#dim7');
  });
});

describe('Half-Diminished Seventh Chords', () => {
  it('returns the name of the half-diminished seventh chord', () => {
    expect(Chord.for('C Eb Gb Bb')?.getName()).toEqual('Cø7');
    expect(Chord.for('C# E G B')?.getName()).toEqual('C#ø7');
    expect(Chord.for('Db Fb Abb Cb5')?.getName()).toEqual('Dbø7');
    expect(Chord.for('D F Ab C5')?.getName()).toEqual('Dø7');
    expect(Chord.for('D# F# A C#5')?.getName()).toEqual('D#ø7');
    expect(Chord.for('Eb Gb Bbb Db5')?.getName()).toEqual('Ebø7');
    expect(Chord.for('E G Bb D5')?.getName()).toEqual('Eø7');
    expect(Chord.for('E# G# B D#5')?.getName()).toEqual('E#ø7');
    expect(Chord.for('F Ab Cb5 Eb5')?.getName()).toEqual('Fø7');
    expect(Chord.for('F# A C5 E5')?.getName()).toEqual('F#ø7');
    expect(Chord.for('Gb Bbb Dbb5 Fb5')?.getName()).toEqual('Gbø7');
    expect(Chord.for('G Bb Db5 F5')?.getName()).toEqual('Gø7');
    expect(Chord.for('G# B D5 F#5')?.getName()).toEqual('G#ø7');
    expect(Chord.for('Ab3 Cb Ebb Gb')?.getName()).toEqual('Abø7');
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
    expect(Chord.for('Gb Bbb Db5 F5')?.getName()).toEqual('Gbm7+');
    expect(Chord.for('G Bb D5 F#5')?.getName()).toEqual('Gm7+');
    expect(Chord.for('G# B D#5 F𝄪5')?.getName()).toEqual('G#m7+');
    expect(Chord.for('Ab3 Cb Eb G')?.getName()).toEqual('Abm7+');
    expect(Chord.for('A3 C E G#')?.getName()).toEqual('Am7+');
    expect(Chord.for('A#3 C# E# G𝄪')?.getName()).toEqual('A#m7+');
    expect(Chord.for('Bb3 Db F A')?.getName()).toEqual('Bbm7+');
    expect(Chord.for('B3 D F# A#')?.getName()).toEqual('Bm7+');
  });
})

describe('Out of Order Chords', () => {
  it('returns the appropriate chord', () => {
    expect(Chord.for('C G E')?.getName()).toEqual('C');
    expect(Chord.for('G E C')?.getName()).toEqual('C');
    expect(Chord.for('E C5 G')?.getName()).toEqual('C/E');
    expect(Chord.for('C5 G E')?.getName()).toEqual('C/E');
    expect(Chord.for('C G Eb')?.getName()).toEqual('Cm');
    expect(Chord.for('G Eb C')?.getName()).toEqual('Cm');
    expect(Chord.for('Eb C5 G')?.getName()).toEqual('Cm/Eb');
    expect(Chord.for('C5 G Eb')?.getName()).toEqual('Cm/Eb');
    expect(Chord.for('C G F')?.getName()).toEqual('Csus');
    expect(Chord.for('G F C')?.getName()).toEqual('Csus');
    expect(Chord.for('G3 F C')?.getName()).toEqual('Csus/G');
    expect(Chord.for('F C G3')?.getName()).toEqual('Csus/G');
    expect(Chord.for('C G D')?.getName()).toEqual('Csus2');
    expect(Chord.for('G D C')?.getName()).toEqual('Csus2');
    expect(Chord.for('C G# E')?.getName()).toEqual('Caug');
    expect(Chord.for('E C G#')?.getName()).toEqual('Caug');
    expect(Chord.for('C Gb Eb')?.getName()).toEqual('Cdim');
    expect(Chord.for('Gb Eb C')?.getName()).toEqual('Cdim');
    expect(Chord.for('C A E G')?.getName()).toEqual('C6');
    expect(Chord.for('C A G E')?.getName()).toEqual('C6');
    expect(Chord.for('C A Eb G')?.getName()).toEqual('Cm6');
    expect(Chord.for('C G Eb A')?.getName()).toEqual('Cm6');
    expect(Chord.for('C G Bb E')?.getName()).toEqual('C7');
    expect(Chord.for('C E Bb G')?.getName()).toEqual('C7');   
    expect(Chord.for('C E G B')?.getName()).toEqual('Cmaj7');
    expect(Chord.for('C B G E')?.getName()).toEqual('Cmaj7');
    expect(Chord.for('C G# B E')?.getName()).toEqual('Cmaj+7');
    expect(Chord.for('C B G# E')?.getName()).toEqual('Cmaj+7');
    expect(Chord.for('C G Bb Eb')?.getName()).toEqual('Cm7');
    expect(Chord.for('C Eb Bb G')?.getName()).toEqual('Cm7');
    expect(Chord.for('C G Eb B')?.getName()).toEqual('Cm7+');
    expect(Chord.for('C G B Eb')?.getName()).toEqual('Cm7+');
    expect(Chord.for('C Gb Eb Bbb')?.getName()).toEqual('Cdim7');
    expect(Chord.for('C Bbb Eb Gb')?.getName()).toEqual('Cdim7');
    expect(Chord.for('C G# Bb E')?.getName()).toEqual('C+7');
    expect(Chord.for('C Bb G# E')?.getName()).toEqual('C+7');
    expect(Chord.for('C Gb Eb Bb')?.getName()).toEqual('Cø7');
    expect(Chord.for('C Gb Bb Eb')?.getName()).toEqual('Cø7');

  })
})

describe('.for', () => {
  describe('with a string', () => {
    expect(Chord.for('C E G')?.getName()).toEqual('C');
  });

  describe('with an array of Notes', () => {
    const C = Note.fromMidi(60);
    const E = Note.fromMidi(64);
    const G = Note.fromMidi(67);

    expect(Chord.for([C, E, G])?.getName()).toEqual('C');
  });
});
