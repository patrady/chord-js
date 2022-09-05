import { Accidental } from "../accidental";

describe("#new", () => {
  describe("with a valid accidental", () => {
    it("returns an accidental", () => {
      expect(Accidental.for("b")).toEqual(Accidental.flat());
      expect(Accidental.for("#")).toEqual(Accidental.sharp());
      expect(Accidental.for("♮")).toEqual(Accidental.natural());
    });
  });

  describe("with no value", () => {
    it("returns a natural", () => {
      expect(Accidental.for()).toEqual(Accidental.natural());
    });
  });
});

describe("#isFlat", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(Accidental.for("b").isFlat()).toBeTruthy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isFlat()).toBeFalsy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isFlat()).toBeFalsy();
    });
  });
});

describe("#isSharp", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(Accidental.for("b").isSharp()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isSharp()).toBeTruthy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isSharp()).toBeFalsy();
    });
  });
});

describe("#isNatural", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(Accidental.for("b").isNatural()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isNatural()).toBeFalsy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isNatural()).toBeTruthy();
    });
  });
});

describe("#getKeyOffset", () => {
  describe("with a sharp", () => {
    it("returns 1", () => {
      expect(Accidental.for("#").getKeyOffset()).toEqual(1);
    });
  });

  describe("with a flat", () => {
    it("returns -1", () => {
      expect(Accidental.for("b").getKeyOffset()).toEqual(-1);
    });
  });

  describe("with a natural", () => {
    it("returns 0", () => {
      expect(Accidental.for("♮").getKeyOffset()).toEqual(0);
    });
  });
});

describe("#getValue", () => {
  describe("with a sharp", () => {
    it("returns a sharp", () => {
      expect(Accidental.for("#").getValue()).toEqual("#");
    });
  });

  describe("with a flat", () => {
    it("returns a flat", () => {
      expect(Accidental.for("b").getValue()).toEqual("b");
    });
  });

  describe("with a natural", () => {
    it("returns an empty string", () => {
      expect(Accidental.for("♮").getValue()).toEqual("");
    });
  });
});
