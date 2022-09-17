import { Name } from '../name';

describe('#new', () => {
  describe('with a valid name', () => {
    it('returns the name', () => {
      expect(new Name('C').value).toEqual('C');
      expect(new Name('D').value).toEqual('D');
      expect(new Name('E').value).toEqual('E');
      expect(new Name('F').value).toEqual('F');
      expect(new Name('G').value).toEqual('G');
      expect(new Name('A').value).toEqual('A');
      expect(new Name('B').value).toEqual('B');
    });
  });

  describe('with an invalid name', () => {
    it('returns the C', () => {
      expect(new Name('H').value).toEqual('C');
      expect(new Name('a').value).toEqual('C');
      expect(new Name('I').value).toEqual('C');
      expect(new Name('8').value).toEqual('C');
    });
  });
});

describe('#C', () => {
  describe('when the note is C', () => {
    it('returns true', () => {
      expect(new Name('C').isC()).toBeTruthy();
    });
  });

  describe('when the note is not C', () => {
    it('returns false', () => {
      expect(new Name('D').isC()).toBeFalsy();
      expect(new Name('E').isC()).toBeFalsy();
      expect(new Name('F').isC()).toBeFalsy();
      expect(new Name('G').isC()).toBeFalsy();
      expect(new Name('A').isC()).toBeFalsy();
      expect(new Name('B').isC()).toBeFalsy();
    });
  });
});

describe('#D', () => {
  describe('when the note is D', () => {
    it('returns true', () => {
      expect(new Name('D').isD()).toBeTruthy();
    });
  });

  describe('when the note is not D', () => {
    it('returns false', () => {
      expect(new Name('C').isD()).toBeFalsy();
      expect(new Name('E').isD()).toBeFalsy();
      expect(new Name('F').isD()).toBeFalsy();
      expect(new Name('G').isD()).toBeFalsy();
      expect(new Name('A').isD()).toBeFalsy();
      expect(new Name('B').isD()).toBeFalsy();
    });
  });
});

describe('#E', () => {
  describe('when the note is E', () => {
    it('returns true', () => {
      expect(new Name('E').isE()).toBeTruthy();
    });
  });

  describe('when the note is not E', () => {
    it('returns false', () => {
      expect(new Name('C').isE()).toBeFalsy();
      expect(new Name('D').isE()).toBeFalsy();
      expect(new Name('F').isE()).toBeFalsy();
      expect(new Name('G').isE()).toBeFalsy();
      expect(new Name('A').isE()).toBeFalsy();
      expect(new Name('B').isE()).toBeFalsy();
    });
  });
});

describe('#F', () => {
  describe('when the note is F', () => {
    it('returns true', () => {
      expect(new Name('F').isF()).toBeTruthy();
    });
  });

  describe('when the note is not F', () => {
    it('returns false', () => {
      expect(new Name('C').isF()).toBeFalsy();
      expect(new Name('D').isF()).toBeFalsy();
      expect(new Name('E').isF()).toBeFalsy();
      expect(new Name('G').isF()).toBeFalsy();
      expect(new Name('A').isF()).toBeFalsy();
      expect(new Name('B').isF()).toBeFalsy();
    });
  });
});

describe('#G', () => {
  describe('when the note is G', () => {
    it('returns true', () => {
      expect(new Name('G').isG()).toBeTruthy();
    });
  });

  describe('when the note is not G', () => {
    it('returns false', () => {
      expect(new Name('C').isG()).toBeFalsy();
      expect(new Name('D').isG()).toBeFalsy();
      expect(new Name('E').isG()).toBeFalsy();
      expect(new Name('F').isG()).toBeFalsy();
      expect(new Name('A').isG()).toBeFalsy();
      expect(new Name('B').isG()).toBeFalsy();
    });
  });
});

describe('#A', () => {
  describe('when the note is A', () => {
    it('returns true', () => {
      expect(new Name('A').isA()).toBeTruthy();
    });
  });

  describe('when the note is not A', () => {
    it('returns false', () => {
      expect(new Name('C').isA()).toBeFalsy();
      expect(new Name('D').isA()).toBeFalsy();
      expect(new Name('E').isA()).toBeFalsy();
      expect(new Name('F').isA()).toBeFalsy();
      expect(new Name('G').isA()).toBeFalsy();
      expect(new Name('B').isA()).toBeFalsy();
    });
  });
});

describe('#B', () => {
  describe('when the note is B', () => {
    it('returns true', () => {
      expect(new Name('B').isB()).toBeTruthy();
    });
  });

  describe('when the note is not B', () => {
    it('returns false', () => {
      expect(new Name('C').isB()).toBeFalsy();
      expect(new Name('D').isB()).toBeFalsy();
      expect(new Name('E').isB()).toBeFalsy();
      expect(new Name('F').isB()).toBeFalsy();
      expect(new Name('G').isB()).toBeFalsy();
      expect(new Name('A').isB()).toBeFalsy();
    });
  });
});

describe('.fromMidi', () => {
  it('returns the name portion of the MIDI value', () => {
    expect(Name.fromMidi(24)).toEqual('C');
    expect(Name.fromMidi(36)).toEqual('C');
    expect(Name.fromMidi(48)).toEqual('C');
    expect(Name.fromMidi(60)).toEqual('C');
    expect(Name.fromMidi(72)).toEqual('C');
    expect(Name.fromMidi(84)).toEqual('C');
    expect(Name.fromMidi(96)).toEqual('C');
    expect(Name.fromMidi(108)).toEqual('C');

    expect(Name.fromMidi(25)).toEqual('Db');
    expect(Name.fromMidi(37)).toEqual('Db');
    expect(Name.fromMidi(49)).toEqual('Db');
    expect(Name.fromMidi(61)).toEqual('Db');
    expect(Name.fromMidi(73)).toEqual('Db');
    expect(Name.fromMidi(85)).toEqual('Db');
    expect(Name.fromMidi(97)).toEqual('Db');

    expect(Name.fromMidi(26)).toEqual('D');
    expect(Name.fromMidi(38)).toEqual('D');
    expect(Name.fromMidi(50)).toEqual('D');
    expect(Name.fromMidi(62)).toEqual('D');
    expect(Name.fromMidi(74)).toEqual('D');
    expect(Name.fromMidi(86)).toEqual('D');
    expect(Name.fromMidi(98)).toEqual('D');

    expect(Name.fromMidi(27)).toEqual('Eb');
    expect(Name.fromMidi(39)).toEqual('Eb');
    expect(Name.fromMidi(51)).toEqual('Eb');
    expect(Name.fromMidi(63)).toEqual('Eb');
    expect(Name.fromMidi(75)).toEqual('Eb');
    expect(Name.fromMidi(87)).toEqual('Eb');
    expect(Name.fromMidi(99)).toEqual('Eb');

    expect(Name.fromMidi(28)).toEqual('E');
    expect(Name.fromMidi(40)).toEqual('E');
    expect(Name.fromMidi(52)).toEqual('E');
    expect(Name.fromMidi(64)).toEqual('E');
    expect(Name.fromMidi(76)).toEqual('E');
    expect(Name.fromMidi(88)).toEqual('E');
    expect(Name.fromMidi(100)).toEqual('E');

    expect(Name.fromMidi(29)).toEqual('F');
    expect(Name.fromMidi(41)).toEqual('F');
    expect(Name.fromMidi(53)).toEqual('F');
    expect(Name.fromMidi(65)).toEqual('F');
    expect(Name.fromMidi(77)).toEqual('F');
    expect(Name.fromMidi(89)).toEqual('F');
    expect(Name.fromMidi(101)).toEqual('F');

    expect(Name.fromMidi(30)).toEqual('Gb');
    expect(Name.fromMidi(42)).toEqual('Gb');
    expect(Name.fromMidi(54)).toEqual('Gb');
    expect(Name.fromMidi(66)).toEqual('Gb');
    expect(Name.fromMidi(78)).toEqual('Gb');
    expect(Name.fromMidi(90)).toEqual('Gb');
    expect(Name.fromMidi(102)).toEqual('Gb');

    expect(Name.fromMidi(31)).toEqual('G');
    expect(Name.fromMidi(43)).toEqual('G');
    expect(Name.fromMidi(55)).toEqual('G');
    expect(Name.fromMidi(67)).toEqual('G');
    expect(Name.fromMidi(79)).toEqual('G');
    expect(Name.fromMidi(91)).toEqual('G');
    expect(Name.fromMidi(103)).toEqual('G');

    expect(Name.fromMidi(32)).toEqual('Ab');
    expect(Name.fromMidi(44)).toEqual('Ab');
    expect(Name.fromMidi(56)).toEqual('Ab');
    expect(Name.fromMidi(68)).toEqual('Ab');
    expect(Name.fromMidi(80)).toEqual('Ab');
    expect(Name.fromMidi(92)).toEqual('Ab');
    expect(Name.fromMidi(104)).toEqual('Ab');

    expect(Name.fromMidi(33)).toEqual('A');
    expect(Name.fromMidi(45)).toEqual('A');
    expect(Name.fromMidi(57)).toEqual('A');
    expect(Name.fromMidi(69)).toEqual('A');
    expect(Name.fromMidi(81)).toEqual('A');
    expect(Name.fromMidi(93)).toEqual('A');
    expect(Name.fromMidi(105)).toEqual('A');

    expect(Name.fromMidi(34)).toEqual('Bb');
    expect(Name.fromMidi(46)).toEqual('Bb');
    expect(Name.fromMidi(58)).toEqual('Bb');
    expect(Name.fromMidi(70)).toEqual('Bb');
    expect(Name.fromMidi(82)).toEqual('Bb');
    expect(Name.fromMidi(94)).toEqual('Bb');
    expect(Name.fromMidi(106)).toEqual('Bb');

    expect(Name.fromMidi(35)).toEqual('B');
    expect(Name.fromMidi(47)).toEqual('B');
    expect(Name.fromMidi(59)).toEqual('B');
    expect(Name.fromMidi(71)).toEqual('B');
    expect(Name.fromMidi(83)).toEqual('B');
    expect(Name.fromMidi(95)).toEqual('B');
    expect(Name.fromMidi(107)).toEqual('B');
  });
});
