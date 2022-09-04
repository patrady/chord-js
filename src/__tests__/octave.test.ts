import { Octave } from "../octave";

describe("#new", () => {
  describe("with a valid number", () => {
    it("returns an octave", () => {
      expect(new Octave("0").value).toEqual(0);
      expect(new Octave(0).value).toEqual(0);

      expect(new Octave("4").value).toEqual(4);
      expect(new Octave(4).value).toEqual(4);

      expect(new Octave("8").value).toEqual(8);
      expect(new Octave(8).value).toEqual(8);
    });
  });

  describe("with an invalid number", () => {
    it("returns the middle octave", () => {
      expect(new Octave("-1")).toEqual(Octave.middle());
      expect(new Octave(-1)).toEqual(Octave.middle());

      expect(new Octave("9")).toEqual(Octave.middle());
      expect(new Octave(9)).toEqual(Octave.middle());
    });
  });

  describe("with no value", () => {
    it("returns the middle octave", () => {
      expect(new Octave()).toEqual(Octave.middle());
    });
  });
});

describe("#toString", () => {
  it("returns the octave value", () => {
    expect(new Octave(3).toString()).toEqual("3");
  })
})

describe(".middle", () => {
  it("returns the 4th octave", () => {
    expect(Octave.middle()).toEqual(new Octave(4));
  });
});
