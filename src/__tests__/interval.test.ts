import { Interval } from '../interval';

describe('#getSemitones', () => {
  it('returns the number of half steps between two notes', () => {
    expect(Interval.between('C', 'C').getSemitones()).toEqual(0);
    expect(Interval.between('C', 'C#').getSemitones()).toEqual(1);
    expect(Interval.between('C', 'Db').getSemitones()).toEqual(1);
    expect(Interval.between('C', 'D').getSemitones()).toEqual(2);
    expect(Interval.between('C', 'D#').getSemitones()).toEqual(3);
    expect(Interval.between('C', 'Eb').getSemitones()).toEqual(3);
    expect(Interval.between('C', 'E').getSemitones()).toEqual(4);
    expect(Interval.between('C', 'Fb').getSemitones()).toEqual(4);
    expect(Interval.between('C', 'E#').getSemitones()).toEqual(5);
    expect(Interval.between('C', 'F').getSemitones()).toEqual(5);
    expect(Interval.between('C', 'F#').getSemitones()).toEqual(6);
    expect(Interval.between('C', 'Gb').getSemitones()).toEqual(6);
    expect(Interval.between('C', 'G').getSemitones()).toEqual(7);
    expect(Interval.between('C', 'G#').getSemitones()).toEqual(8);
    expect(Interval.between('C', 'Ab').getSemitones()).toEqual(8);
    expect(Interval.between('C', 'A').getSemitones()).toEqual(9);
    expect(Interval.between('C', 'A#').getSemitones()).toEqual(10);
    expect(Interval.between('C', 'Bb').getSemitones()).toEqual(10);
    expect(Interval.between('C', 'B').getSemitones()).toEqual(11);

    expect(Interval.between('D', 'D').getSemitones()).toEqual(0);
    expect(Interval.between('D', 'D#').getSemitones()).toEqual(1);
    expect(Interval.between('D', 'Eb').getSemitones()).toEqual(1);
    expect(Interval.between('D', 'E').getSemitones()).toEqual(2);
    expect(Interval.between('D', 'Fb').getSemitones()).toEqual(2);
    expect(Interval.between('D', 'E#').getSemitones()).toEqual(3);
    expect(Interval.between('D', 'F').getSemitones()).toEqual(3);
    expect(Interval.between('D', 'F#').getSemitones()).toEqual(4);
    expect(Interval.between('D', 'Gb').getSemitones()).toEqual(4);
    expect(Interval.between('D', 'G').getSemitones()).toEqual(5);
    expect(Interval.between('D', 'G#').getSemitones()).toEqual(6);
    expect(Interval.between('D', 'Ab').getSemitones()).toEqual(6);
    expect(Interval.between('D', 'A').getSemitones()).toEqual(7);
    expect(Interval.between('D', 'A#').getSemitones()).toEqual(8);
    expect(Interval.between('D', 'Bb').getSemitones()).toEqual(8);
    expect(Interval.between('D', 'B').getSemitones()).toEqual(9);
    expect(Interval.between('D', 'B#').getSemitones()).toEqual(10);
    expect(Interval.between('D', 'C').getSemitones()).toEqual(10);
    expect(Interval.between('D', 'C#').getSemitones()).toEqual(11);
    expect(Interval.between('D', 'Db').getSemitones()).toEqual(11);

    expect(Interval.between('F', 'F').getSemitones()).toEqual(0);
    expect(Interval.between('F', 'F#').getSemitones()).toEqual(1);
    expect(Interval.between('F', 'Gb').getSemitones()).toEqual(1);
    expect(Interval.between('F', 'G').getSemitones()).toEqual(2);
    expect(Interval.between('F', 'G#').getSemitones()).toEqual(3);
    expect(Interval.between('F', 'Ab').getSemitones()).toEqual(3);
    expect(Interval.between('F', 'A').getSemitones()).toEqual(4);
    expect(Interval.between('F', 'A#').getSemitones()).toEqual(5);
    expect(Interval.between('F', 'Bb').getSemitones()).toEqual(5);
    expect(Interval.between('F', 'B').getSemitones()).toEqual(6);
    expect(Interval.between('F', 'B#').getSemitones()).toEqual(7);
    expect(Interval.between('F', 'C').getSemitones()).toEqual(7);
    expect(Interval.between('F', 'C#').getSemitones()).toEqual(8);
    expect(Interval.between('F', 'Db').getSemitones()).toEqual(8);
    expect(Interval.between('F', 'D').getSemitones()).toEqual(9);
    expect(Interval.between('F', 'D#').getSemitones()).toEqual(10);
    expect(Interval.between('F', 'Eb').getSemitones()).toEqual(10);
    expect(Interval.between('F', 'E').getSemitones()).toEqual(11);
    expect(Interval.between('F', 'Fb').getSemitones()).toEqual(11);
  });
});

describe('#isMajor2nd', () => {
  describe('and there are 2 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'D').isMajor2nd()).toBeTruthy();
      expect(Interval.between('C#', 'D#').isMajor2nd()).toBeTruthy();
      expect(Interval.between('D', 'E').isMajor2nd()).toBeTruthy();
      expect(Interval.between('Eb', 'F').isMajor2nd()).toBeTruthy();
      expect(Interval.between('E', 'F#').isMajor2nd()).toBeTruthy();
      expect(Interval.between('F', 'G').isMajor2nd()).toBeTruthy();
      expect(Interval.between('F#', 'G#').isMajor2nd()).toBeTruthy();
      expect(Interval.between('G', 'A').isMajor2nd()).toBeTruthy();
      expect(Interval.between('G#', 'A#').isMajor2nd()).toBeTruthy();
      expect(Interval.between('Ab', 'Bb').isMajor2nd()).toBeTruthy();
      expect(Interval.between('A', 'B').isMajor2nd()).toBeTruthy();
      expect(Interval.between('Bb', 'C').isMajor2nd()).toBeTruthy();
    });
  });

  describe('and there are not 2 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'F').isMajor2nd()).toBeFalsy();
    });
  });
});

describe('#isMajor3rd', () => {
  describe('and there are 4 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'E').isMajor3rd()).toBeTruthy();
      expect(Interval.between('Db', 'F').isMajor3rd()).toBeTruthy();
      expect(Interval.between('D', 'F#').isMajor3rd()).toBeTruthy();
      expect(Interval.between('Eb', 'G').isMajor3rd()).toBeTruthy();
      expect(Interval.between('E', 'G#').isMajor3rd()).toBeTruthy();
      expect(Interval.between('F', 'A').isMajor3rd()).toBeTruthy();
      expect(Interval.between('F#', 'A#').isMajor3rd()).toBeTruthy();
      expect(Interval.between('G', 'B').isMajor3rd()).toBeTruthy();
      expect(Interval.between('Ab', 'C').isMajor3rd()).toBeTruthy();
      expect(Interval.between('A', 'Db').isMajor3rd()).toBeTruthy();
      expect(Interval.between('Bb', 'D').isMajor3rd()).toBeTruthy();
    });
  });

  describe('and there are not 4 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'D').isMajor3rd()).toBeFalsy();
    });
  });
});

describe('#isMajor6th', () => {
  describe('and there are 9 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'A').isMajor6th()).toBeTruthy();
      expect(Interval.between('Db', 'Bb').isMajor6th()).toBeTruthy();
      expect(Interval.between('D', 'B').isMajor6th()).toBeTruthy();
      expect(Interval.between('Eb', 'C').isMajor6th()).toBeTruthy();
      expect(Interval.between('E', 'C#').isMajor6th()).toBeTruthy();
      expect(Interval.between('F', 'D').isMajor6th()).toBeTruthy();
      expect(Interval.between('F#', 'D#').isMajor6th()).toBeTruthy();
      expect(Interval.between('G', 'E').isMajor6th()).toBeTruthy();
      expect(Interval.between('Ab', 'F').isMajor6th()).toBeTruthy();
      expect(Interval.between('A', 'F#').isMajor6th()).toBeTruthy();
      expect(Interval.between('Bb', 'G').isMajor6th()).toBeTruthy();
    });
  });

  describe('and there are not 9 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'F').isMajor6th()).toBeFalsy();
    });
  });
});

describe('#isMajor7th', () => {
  describe('and there are 11 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'B').isMajor7th()).toBeTruthy();
      expect(Interval.between('Db', 'C').isMajor7th()).toBeTruthy();
      expect(Interval.between('D', 'C#').isMajor7th()).toBeTruthy();
      expect(Interval.between('Eb', 'D').isMajor7th()).toBeTruthy();
      expect(Interval.between('E', 'Eb').isMajor7th()).toBeTruthy();
      expect(Interval.between('F', 'E').isMajor7th()).toBeTruthy();
      expect(Interval.between('F#', 'F').isMajor7th()).toBeTruthy();
      expect(Interval.between('G', 'F#').isMajor7th()).toBeTruthy();
      expect(Interval.between('Ab', 'G').isMajor7th()).toBeTruthy();
      expect(Interval.between('A', 'G#').isMajor7th()).toBeTruthy();
      expect(Interval.between('Bb', 'A').isMajor7th()).toBeTruthy();
    });
  });

  describe('and there are not 11 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'A').isMajor7th()).toBeFalsy();
    });
  });
});

describe('#isMinor2nd', () => {
  describe('and there are 1 semitone between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'Db').isMinor2nd()).toBeTruthy();
      expect(Interval.between('C#', 'D').isMinor2nd()).toBeTruthy();
      expect(Interval.between('D', 'Eb').isMinor2nd()).toBeTruthy();
      expect(Interval.between('E', 'F').isMinor2nd()).toBeTruthy();
      expect(Interval.between('F', 'F#').isMinor2nd()).toBeTruthy();
      expect(Interval.between('F#', 'G').isMinor2nd()).toBeTruthy();
      expect(Interval.between('G', 'G#').isMinor2nd()).toBeTruthy();
      expect(Interval.between('G#', 'A').isMinor2nd()).toBeTruthy();
      expect(Interval.between('A', 'Bb').isMinor2nd()).toBeTruthy();
      expect(Interval.between('B', 'C').isMinor2nd()).toBeTruthy();
    });
  });

  describe('and there are not 1 semitone between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'D').isMinor2nd()).toBeFalsy();
    });
  });
});

describe('#isMinor3rd', () => {
  describe('and there are 3 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'Eb').isMinor3rd()).toBeTruthy();
      expect(Interval.between('C#', 'E').isMinor3rd()).toBeTruthy();
      expect(Interval.between('Db', 'Fb').isMinor3rd()).toBeTruthy();
      expect(Interval.between('D', 'F').isMinor3rd()).toBeTruthy();
      expect(Interval.between('D#', 'F#').isMinor3rd()).toBeTruthy();
      expect(Interval.between('Eb', 'Gb').isMinor3rd()).toBeTruthy();
      expect(Interval.between('E', 'G').isMinor3rd()).toBeTruthy();
      expect(Interval.between('F', 'Ab').isMinor3rd()).toBeTruthy();
      expect(Interval.between('F#', 'A').isMinor3rd()).toBeTruthy();
      expect(Interval.between('G', 'Bb').isMinor3rd()).toBeTruthy();
      expect(Interval.between('G#', 'B').isMinor3rd()).toBeTruthy();
      expect(Interval.between('Ab', 'Cb').isMinor3rd()).toBeTruthy();
      expect(Interval.between('A', 'C').isMinor3rd()).toBeTruthy();
      expect(Interval.between('Bb', 'Db').isMinor3rd()).toBeTruthy();
      expect(Interval.between('B', 'D').isMinor3rd()).toBeTruthy();
    });
  });

  describe('and there are not 3 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'D').isMinor3rd()).toBeFalsy();
    });
  });
});

describe('#isMinor6th', () => {
  describe('and there are 8 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'Ab').isMinor6th()).toBeTruthy();
      expect(Interval.between('Db', 'A').isMinor6th()).toBeTruthy();
      expect(Interval.between('D', 'Bb').isMinor6th()).toBeTruthy();
      expect(Interval.between('Eb', 'Cb').isMinor6th()).toBeTruthy();
      expect(Interval.between('E', 'C').isMinor6th()).toBeTruthy();
      expect(Interval.between('F', 'Db').isMinor6th()).toBeTruthy();
      expect(Interval.between('F#', 'D').isMinor6th()).toBeTruthy();
      expect(Interval.between('G', 'Eb').isMinor6th()).toBeTruthy();
      expect(Interval.between('Ab', 'Fb').isMinor6th()).toBeTruthy();
      expect(Interval.between('A', 'F').isMinor6th()).toBeTruthy();
      expect(Interval.between('Bb', 'Gb').isMinor6th()).toBeTruthy();
    });
  });

  describe('and there are not 8 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'F').isMinor6th()).toBeFalsy();
    });
  });
});

describe('#isMinor7th', () => {
  describe('and there are 10 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'Bb').isMinor7th()).toBeTruthy();
      expect(Interval.between('Db', 'Cb').isMinor7th()).toBeTruthy();
      expect(Interval.between('D', 'C').isMinor7th()).toBeTruthy();
      expect(Interval.between('Eb', 'Db').isMinor7th()).toBeTruthy();
      expect(Interval.between('E', 'D').isMinor7th()).toBeTruthy();
      expect(Interval.between('F', 'Eb').isMinor7th()).toBeTruthy();
      expect(Interval.between('F#', 'E').isMinor7th()).toBeTruthy();
      expect(Interval.between('G', 'F').isMinor7th()).toBeTruthy();
      expect(Interval.between('Ab', 'Gb').isMinor7th()).toBeTruthy();
      expect(Interval.between('A', 'G').isMinor7th()).toBeTruthy();
      expect(Interval.between('Bb', 'Ab').isMinor7th()).toBeTruthy();
    });
  });

  describe('and there are not 10 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'A').isMinor7th()).toBeFalsy();
    });
  });
});

describe('#isPerfect4th', () => {
  describe('and there are 5 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'F').isPerfect4th()).toBeTruthy();
      expect(Interval.between('C#', 'F#').isPerfect4th()).toBeTruthy();
      expect(Interval.between('Db', 'Gb').isPerfect4th()).toBeTruthy();
      expect(Interval.between('D', 'G').isPerfect4th()).toBeTruthy();
      expect(Interval.between('Eb', 'Ab').isPerfect4th()).toBeTruthy();
      expect(Interval.between('E', 'A').isPerfect4th()).toBeTruthy();
      expect(Interval.between('F', 'Bb').isPerfect4th()).toBeTruthy();
      expect(Interval.between('F#', 'B').isPerfect4th()).toBeTruthy();
      expect(Interval.between('G', 'C').isPerfect4th()).toBeTruthy();
      expect(Interval.between('G#', 'C#').isPerfect4th()).toBeTruthy();
      expect(Interval.between('Ab', 'Db').isPerfect4th()).toBeTruthy();
      expect(Interval.between('A', 'D').isPerfect4th()).toBeTruthy();
      expect(Interval.between('Bb', 'Eb').isPerfect4th()).toBeTruthy();
      expect(Interval.between('B', 'E').isPerfect4th()).toBeTruthy();
    });
  });

  describe('and there are not 5 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'E').isPerfect4th()).toBeFalsy();
    });
  });
});

describe('#isPerfect5th', () => {
  describe('and there are 7 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'G').isPerfect5th()).toBeTruthy();
      expect(Interval.between('Db', 'Ab').isPerfect5th()).toBeTruthy();
      expect(Interval.between('D', 'A').isPerfect5th()).toBeTruthy();
      expect(Interval.between('Eb', 'Bb').isPerfect5th()).toBeTruthy();
      expect(Interval.between('E', 'B').isPerfect5th()).toBeTruthy();
      expect(Interval.between('F', 'C').isPerfect5th()).toBeTruthy();
      expect(Interval.between('F#', 'C#').isPerfect5th()).toBeTruthy();
      expect(Interval.between('G', 'D').isPerfect5th()).toBeTruthy();
      expect(Interval.between('Ab', 'Eb').isPerfect5th()).toBeTruthy();
      expect(Interval.between('A', 'E').isPerfect5th()).toBeTruthy();
      expect(Interval.between('Bb', 'F').isPerfect5th()).toBeTruthy();
      expect(Interval.between('B', 'F#').isPerfect5th()).toBeTruthy();
    });
  });

  describe('and there is not 7 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'D').isPerfect5th()).toBeFalsy();
    });
  });
});

describe('#isAugmented4th', () => {
  describe('and there are 6 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'F#').isAugmented4th()).toBeTruthy();
      expect(Interval.between('C#', 'G').isAugmented4th()).toBeTruthy();
      expect(Interval.between('Db', 'G').isAugmented4th()).toBeTruthy();
      expect(Interval.between('D', 'G#').isAugmented4th()).toBeTruthy();
      expect(Interval.between('Eb', 'A').isAugmented4th()).toBeTruthy();
      expect(Interval.between('E', 'A#').isAugmented4th()).toBeTruthy();
      expect(Interval.between('F', 'B').isAugmented4th()).toBeTruthy();
      expect(Interval.between('F#', 'C').isAugmented4th()).toBeTruthy();
      expect(Interval.between('G', 'C#').isAugmented4th()).toBeTruthy();
      expect(Interval.between('G#', 'D').isAugmented4th()).toBeTruthy();
      expect(Interval.between('Ab', 'D').isAugmented4th()).toBeTruthy();
      expect(Interval.between('A', 'D#').isAugmented4th()).toBeTruthy();
      expect(Interval.between('Bb', 'E').isAugmented4th()).toBeTruthy();
      expect(Interval.between('B', 'F').isAugmented4th()).toBeTruthy();
    });
  });

  describe('and there are not 6 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'E').isAugmented4th()).toBeFalsy();
    });
  });
});

describe('#isAugmented5th', () => {
  describe('and there are 8 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'G#').isAugmented5th()).toBeTruthy();
      expect(Interval.between('Db', 'A').isAugmented5th()).toBeTruthy();
      expect(Interval.between('D', 'A#').isAugmented5th()).toBeTruthy();
      expect(Interval.between('Eb', 'B').isAugmented5th()).toBeTruthy();
      expect(Interval.between('E', 'B#').isAugmented5th()).toBeTruthy();
      expect(Interval.between('F', 'C#').isAugmented5th()).toBeTruthy();
      expect(Interval.between('F#', 'D').isAugmented5th()).toBeTruthy();
      expect(Interval.between('G', 'D#').isAugmented5th()).toBeTruthy();
      expect(Interval.between('Ab', 'E').isAugmented5th()).toBeTruthy();
      expect(Interval.between('A', 'E#').isAugmented5th()).toBeTruthy();
      expect(Interval.between('Bb', 'F#').isAugmented5th()).toBeTruthy();
      expect(Interval.between('B', 'G').isAugmented5th()).toBeTruthy();
    });
  });

  describe('and there is not 8 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'D').isAugmented5th()).toBeFalsy();
    });
  });
});

describe('#isDiminished4th', () => {
  describe('and there are 4 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'Fb').isDiminished4th()).toBeTruthy();
      expect(Interval.between('C#', 'F').isDiminished4th()).toBeTruthy();
      expect(Interval.between('Db', 'F').isDiminished4th()).toBeTruthy();
      expect(Interval.between('D', 'F#').isDiminished4th()).toBeTruthy();
      expect(Interval.between('Eb', 'G').isDiminished4th()).toBeTruthy();
      expect(Interval.between('E', 'G#').isDiminished4th()).toBeTruthy();
      expect(Interval.between('F', 'A').isDiminished4th()).toBeTruthy();
      expect(Interval.between('F#', 'A#').isDiminished4th()).toBeTruthy();
      expect(Interval.between('G', 'Cb').isDiminished4th()).toBeTruthy();
      expect(Interval.between('G#', 'C').isDiminished4th()).toBeTruthy();
      expect(Interval.between('Ab', 'C').isDiminished4th()).toBeTruthy();
      expect(Interval.between('A', 'Db').isDiminished4th()).toBeTruthy();
      expect(Interval.between('Bb', 'D').isDiminished4th()).toBeTruthy();
      expect(Interval.between('B', 'D#').isDiminished4th()).toBeTruthy();
    });
  });

  describe('and there are not 4 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'F').isDiminished4th()).toBeFalsy();
    });
  });
});

describe('#isDiminished5th', () => {
  describe('and there are 6 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'Gb').isDiminished5th()).toBeTruthy();
      expect(Interval.between('Db', 'G').isDiminished5th()).toBeTruthy();
      expect(Interval.between('D', 'G#').isDiminished5th()).toBeTruthy();
      expect(Interval.between('Eb', 'A').isDiminished5th()).toBeTruthy();
      expect(Interval.between('E', 'Bb').isDiminished5th()).toBeTruthy();
      expect(Interval.between('F', 'B').isDiminished5th()).toBeTruthy();
      expect(Interval.between('F#', 'C').isDiminished5th()).toBeTruthy();
      expect(Interval.between('G', 'C#').isDiminished5th()).toBeTruthy();
      expect(Interval.between('Ab', 'D').isDiminished5th()).toBeTruthy();
      expect(Interval.between('A', 'D#').isDiminished5th()).toBeTruthy();
      expect(Interval.between('Bb', 'E').isDiminished5th()).toBeTruthy();
      expect(Interval.between('B', 'F').isDiminished5th()).toBeTruthy();
    });
  });

  describe('and there is not 6 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'D').isDiminished5th()).toBeFalsy();
    });
  });
});

describe('#isDiminished7th', () => {
  describe('and there are 9 semitones between the notes', () => {
    it('returns true', () => {
      expect(Interval.between('C', 'A').isDiminished7th()).toBeTruthy();
      expect(Interval.between('Db', 'Bb').isDiminished7th()).toBeTruthy();
      expect(Interval.between('D', 'B').isDiminished7th()).toBeTruthy();
      expect(Interval.between('Eb', 'C').isDiminished7th()).toBeTruthy();
      expect(Interval.between('E', 'C#').isDiminished7th()).toBeTruthy();
      expect(Interval.between('F', 'D').isDiminished7th()).toBeTruthy();
      expect(Interval.between('F#', 'D#').isDiminished7th()).toBeTruthy();
      expect(Interval.between('G', 'E').isDiminished7th()).toBeTruthy();
      expect(Interval.between('Ab', 'F').isDiminished7th()).toBeTruthy();
      expect(Interval.between('A', 'F#').isDiminished7th()).toBeTruthy();
      expect(Interval.between('Bb', 'G').isDiminished7th()).toBeTruthy();
    });
  });

  describe('and there is not 9 semitones between the notes', () => {
    it('returns false', () => {
      expect(Interval.between('C', 'D').isDiminished7th()).toBeFalsy();
    });
  });
});

describe('.major2nd', () => {
  it('returns 2', () => {
    expect(Interval.major2nd()).toEqual(2);
  });
});

describe('.major3rd', () => {
  it('returns 4', () => {
    expect(Interval.major3rd()).toEqual(4);
  });
});

describe('.perfect4th', () => {
  it('returns 5', () => {
    expect(Interval.perfect4th()).toEqual(5);
  });
});

describe('.perfect5th', () => {
  it('returns 7', () => {
    expect(Interval.perfect5th()).toEqual(7);
  });
});

describe('.major6th', () => {
  it('returns 9', () => {
    expect(Interval.major6th()).toEqual(9);
  });
});

describe('.major7th', () => {
  it('returns 11', () => {
    expect(Interval.major7th()).toEqual(11);
  });
});

describe('.octave', () => {
  it('returns 12', () => {
    expect(Interval.octave()).toEqual(12);
  });
});
