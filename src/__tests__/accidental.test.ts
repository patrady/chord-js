import { Accidental } from "../accidental";

describe("#new", () => {
  describe("with a valid accidental", () => {
    it("returns an accidental", () => {
      expect(Accidental.for("b")).toEqual(Accidental.flat());
      expect(Accidental.for("bb")).toEqual(Accidental.doubleFlat());
      expect(Accidental.for("#")).toEqual(Accidental.sharp());
      expect(Accidental.for("##")).toEqual(Accidental.doubleSharp());
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

  describe("with a double flat", () => {
    it("returns false", () => {
      expect(Accidental.for("bb").isFlat()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isFlat()).toBeFalsy();
    });
  });

  describe("with a double sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("##").isFlat()).toBeFalsy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isFlat()).toBeFalsy();
    });
  });
});

describe("#isDoubleFlat", () => {
  describe("with a flat", () => {
    it("returns false", () => {
      expect(Accidental.for("b").isDoubleFlat()).toBeFalsy();
    });
  });

  describe("with a double flat", () => {
    it("returns true", () => {
      expect(Accidental.for("bb").isDoubleFlat()).toBeTruthy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isDoubleFlat()).toBeFalsy();
    });
  });

  describe("with a double sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("##").isDoubleFlat()).toBeFalsy();
    });
  });

  describe("with a natural", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isDoubleFlat()).toBeFalsy();
    });
  });
});

describe("#isSharp", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(Accidental.for("b").isSharp()).toBeFalsy();
    });
  });

  describe("with a double flat", () => {
    it("returns false", () => {
      expect(Accidental.for("bb").isSharp()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isSharp()).toBeTruthy();
    });
  });

  describe("with a double sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("##").isSharp()).toBeFalsy();
    });
  });

  describe("with a neutral", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isSharp()).toBeFalsy();
    });
  });
});

describe("#isDoubleSharp", () => {
  describe("with a flat", () => {
    it("returns false", () => {
      expect(Accidental.for("b").isDoubleSharp()).toBeFalsy();
    });
  });

  describe("with a double flat", () => {
    it("returns false", () => {
      expect(Accidental.for("bb").isDoubleSharp()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isDoubleSharp()).toBeFalsy();
    });
  });

  describe("with a double sharp", () => {
    it("returns true", () => {
      expect(Accidental.for("##").isDoubleSharp()).toBeTruthy();
    });
  });

  describe("with a natural", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isDoubleSharp()).toBeFalsy();
    });
  });
});

describe("#isNatural", () => {
  describe("with a flat", () => {
    it("returns true", () => {
      expect(Accidental.for("b").isNatural()).toBeFalsy();
    });
  });

  describe("with a double flat", () => {
    it("returns false", () => {
      expect(Accidental.for("bb").isNatural()).toBeFalsy();
    });
  });

  describe("with a sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("#").isNatural()).toBeFalsy();
    });
  });

  describe("with a double sharp", () => {
    it("returns false", () => {
      expect(Accidental.for("##").isNatural()).toBeFalsy();
    });
  });

  describe("with a natural", () => {
    it("returns false", () => {
      expect(Accidental.for("♮").isNatural()).toBeTruthy();
    });
  });
});

describe("#getKeyIndex", () => {
  describe("with a sharp", () => {
    it("returns 1", () => {
      expect(Accidental.for("#").getKeyIndex()).toEqual(1);
    });
  });

  describe("with a double sharp", () => {
    it("returns 2", () => {
      expect(Accidental.for("##").getKeyIndex()).toEqual(2);
    });
  });

  describe("with a flat", () => {
    it("returns -1", () => {
      expect(Accidental.for("b").getKeyIndex()).toEqual(-1);
    });
  });

  describe("with a double flat", () => {
    it("returns -2", () => {
      expect(Accidental.for("bb").getKeyIndex()).toEqual(-2);
    });
  });

  describe("with a natural", () => {
    it("returns 0", () => {
      expect(Accidental.for("♮").getKeyIndex()).toEqual(0);
    });
  });
});

describe("#getValue", () => {
  describe("with a sharp", () => {
    it("returns a sharp", () => {
      expect(Accidental.for("#").getValue()).toEqual("#");
    });
  });

  describe("with a double sharp", () => {
    it("returns a double sharp", () => {
      expect(Accidental.for("##").getValue()).toEqual("##");
    });
  });

  describe("with a flat", () => {
    it("returns a flat", () => {
      expect(Accidental.for("b").getValue()).toEqual("b");
    });
  });

  describe("with a double flat", () => {
    it("returns a double flat", () => {
      expect(Accidental.for("bb").getValue()).toEqual("bb");
    });
  });

  describe("with a natural", () => {
    it("returns an empty string", () => {
      expect(Accidental.for("♮").getValue()).toEqual("");
    });
  });
});
