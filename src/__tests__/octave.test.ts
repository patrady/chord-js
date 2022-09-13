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

describe(".fromMidi", () => {
  it("returns the octave from the midi value", () => {
    expect(Octave.fromMidi(21)).toEqual(new Octave(0));
    expect(Octave.fromMidi(23)).toEqual(new Octave(0));
    expect(Octave.fromMidi(24)).toEqual(new Octave(1));
    expect(Octave.fromMidi(25)).toEqual(new Octave(1));
    expect(Octave.fromMidi(35)).toEqual(new Octave(1));
    expect(Octave.fromMidi(36)).toEqual(new Octave(2));
    expect(Octave.fromMidi(37)).toEqual(new Octave(2));
    expect(Octave.fromMidi(47)).toEqual(new Octave(2));
    expect(Octave.fromMidi(48)).toEqual(new Octave(3));
    expect(Octave.fromMidi(49)).toEqual(new Octave(3));
    expect(Octave.fromMidi(59)).toEqual(new Octave(3));
    expect(Octave.fromMidi(60)).toEqual(new Octave(4));
    expect(Octave.fromMidi(61)).toEqual(new Octave(4));
    expect(Octave.fromMidi(71)).toEqual(new Octave(4));
    expect(Octave.fromMidi(72)).toEqual(new Octave(5));
    expect(Octave.fromMidi(73)).toEqual(new Octave(5));
    expect(Octave.fromMidi(83)).toEqual(new Octave(5));
    expect(Octave.fromMidi(84)).toEqual(new Octave(6));
    expect(Octave.fromMidi(85)).toEqual(new Octave(6));
    expect(Octave.fromMidi(95)).toEqual(new Octave(6));
    expect(Octave.fromMidi(96)).toEqual(new Octave(7));
    expect(Octave.fromMidi(97)).toEqual(new Octave(7));
    expect(Octave.fromMidi(107)).toEqual(new Octave(7));
    expect(Octave.fromMidi(108)).toEqual(new Octave(8));
  })
})
