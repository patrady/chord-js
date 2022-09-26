import { Octave } from '../octave';

describe('#new', () => {
  describe('with a valid number', () => {
    it('returns an octave', () => {
      expect(new Octave('0').value).toEqual(0);
      expect(new Octave(0).value).toEqual(0);

      expect(new Octave('4').value).toEqual(4);
      expect(new Octave(4).value).toEqual(4);

      expect(new Octave('8').value).toEqual(8);
      expect(new Octave(8).value).toEqual(8);
    });
  });

  describe('with an invalid number', () => {
    it('returns the middle octave', () => {
      expect(new Octave('-1')).toEqual(Octave.middle());
      expect(new Octave(-1)).toEqual(Octave.middle());

      expect(new Octave('9')).toEqual(Octave.middle());
      expect(new Octave(9)).toEqual(Octave.middle());
    });
  });

  describe('with no value', () => {
    it('returns the middle octave', () => {
      expect(new Octave()).toEqual(Octave.middle());
    });
  });
});

describe('#toString', () => {
  it('returns the octave value', () => {
    expect(new Octave(3).toString()).toEqual('3');
  });
});

describe('.middle', () => {
  it('returns the 4th octave', () => {
    expect(Octave.middle()).toEqual(new Octave(4));
  });
});

describe('.fromMidi', () => {
  it('returns the octave from the midi value', () => {
    expect(Octave.fromMidi(21).equals(new Octave(0))).toBeTruthy();
    expect(Octave.fromMidi(23).equals(new Octave(0))).toBeTruthy();
    expect(Octave.fromMidi(24).equals(new Octave(1))).toBeTruthy();
    expect(Octave.fromMidi(25).equals(new Octave(1))).toBeTruthy();
    expect(Octave.fromMidi(35).equals(new Octave(1))).toBeTruthy();
    expect(Octave.fromMidi(36).equals(new Octave(2))).toBeTruthy();
    expect(Octave.fromMidi(37).equals(new Octave(2))).toBeTruthy();
    expect(Octave.fromMidi(47).equals(new Octave(2))).toBeTruthy();
    expect(Octave.fromMidi(48).equals(new Octave(3))).toBeTruthy();
    expect(Octave.fromMidi(49).equals(new Octave(3))).toBeTruthy();
    expect(Octave.fromMidi(59).equals(new Octave(3))).toBeTruthy();
    expect(Octave.fromMidi(60).equals(new Octave(4))).toBeTruthy();
    expect(Octave.fromMidi(61).equals(new Octave(4))).toBeTruthy();
    expect(Octave.fromMidi(71).equals(new Octave(4))).toBeTruthy();
    expect(Octave.fromMidi(72).equals(new Octave(5))).toBeTruthy();
    expect(Octave.fromMidi(73).equals(new Octave(5))).toBeTruthy();
    expect(Octave.fromMidi(83).equals(new Octave(5))).toBeTruthy();
    expect(Octave.fromMidi(84).equals(new Octave(6))).toBeTruthy();
    expect(Octave.fromMidi(85).equals(new Octave(6))).toBeTruthy();
    expect(Octave.fromMidi(95).equals(new Octave(6))).toBeTruthy();
    expect(Octave.fromMidi(96).equals(new Octave(7))).toBeTruthy();
    expect(Octave.fromMidi(97).equals(new Octave(7))).toBeTruthy();
    expect(Octave.fromMidi(107).equals(new Octave(7))).toBeTruthy();
    expect(Octave.fromMidi(108).equals(new Octave(8))).toBeTruthy();
  });
});

describe('.all', () => {
  it('returns all the possible octaves', () => {
    expect(Octave.all()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
