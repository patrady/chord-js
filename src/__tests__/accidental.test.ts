import { Accidental } from "../accidental";

describe("#new", () => {
  describe("with a valid accidental", () => {
    it("returns an accidental", () => {
      expect(new Accidental("b")).toEqual(Accidental.flat());
      expect(new Accidental("#")).toEqual(Accidental.sharp());
      expect(new Accidental("♮")).toEqual(Accidental.natural());
    });
  });

  describe("with no value", () => {
    it("returns a natural", () => {
      expect(new Accidental()).toEqual(Accidental.natural());
    });
  });
});

describe("#isFlat", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(new Accidental("b").isFlat()).toBeTruthy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(new Accidental("#").isFlat()).toBeFalsy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(new Accidental("♮").isFlat()).toBeFalsy();
    });
  });
});

describe("#isSharp", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(new Accidental("b").isSharp()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(new Accidental("#").isSharp()).toBeTruthy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(new Accidental("♮").isSharp()).toBeFalsy();
    });
  });
});

describe("#isNatural", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(new Accidental("b").isNatural()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(new Accidental("#").isNatural()).toBeFalsy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(new Accidental("♮").isNatural()).toBeTruthy();
    });
  });
});

describe("#getKeyOffset", () => {
  describe("with a sharp", () => {
    it("returns 1", () => {
      expect(new Accidental("#").getKeyOffset()).toEqual(1);
    });
  });

  describe("with a flat", () => {
    it("returns -1", () => {
      expect(new Accidental("b").getKeyOffset()).toEqual(-1);
    });
  });

  describe("with a natural", () => {
    it("returns 0", () => {
      expect(new Accidental("♮").getKeyOffset()).toEqual(0);
    });
  });
});

describe("#getValue", () => {
  describe("with a sharp", () => {
    it("returns a sharp", () => {
      expect(new Accidental("#").getValue()).toEqual("#");
    });
  });

  describe("with a flat", () => {
    it("returns a flat", () => {
      expect(new Accidental("b").getValue()).toEqual("b");
    });
  });

  describe("with a natural", () => {
    it("returns an empty string", () => {
      expect(new Accidental("♮").getValue()).toEqual("");
    });
  });
});

describe(".flat", () => {
  it("has a value of 'b'", () => {
    expect(Accidental.flat().value).toEqual("b");
  });
});

describe(".sharp", () => {
  it("has a value of '#'", () => {
    expect(Accidental.sharp().value).toEqual("#");
  });
});

describe(".natural", () => {
  it("has a value of '♮'", () => {
    expect(Accidental.natural().value).toEqual("♮");
  });
});
