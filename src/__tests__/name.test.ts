import { Name } from "../name";

describe("#constructor", () => {
  describe("#constructor", () => {
    describe("with a valid name", () => {
      it("returns the name", () => {
        expect(new Name("C").value).toEqual("C");
        expect(new Name("D").value).toEqual("D");
        expect(new Name("E").value).toEqual("E");
        expect(new Name("F").value).toEqual("F");
        expect(new Name("G").value).toEqual("G");
        expect(new Name("A").value).toEqual("A");
        expect(new Name("B").value).toEqual("B");
      });
    });

    describe("with an invalid name", () => {
      it("returns the C", () => {
        expect(new Name("H").value).toEqual("C");
        expect(new Name("a").value).toEqual("C");
        expect(new Name("I").value).toEqual("C");
        expect(new Name("8").value).toEqual("C");
      });
    });
  });

  describe("#C", () => {
    describe("when the note is C", () => {
      it("returns true", () => {
        expect(new Name("C").isC()).toBeTruthy();
      });
    });

    describe("when the note is not C", () => {
      it("returns false", () => {
        expect(new Name("D").isC()).toBeFalsy();
        expect(new Name("E").isC()).toBeFalsy();
        expect(new Name("F").isC()).toBeFalsy();
        expect(new Name("G").isC()).toBeFalsy();
        expect(new Name("A").isC()).toBeFalsy();
        expect(new Name("B").isC()).toBeFalsy();
      });
    });
  });

  describe("#D", () => {
    describe("when the note is D", () => {
      it("returns true", () => {
        expect(new Name("D").isD()).toBeTruthy();
      });
    });

    describe("when the note is not D", () => {
      it("returns false", () => {
        expect(new Name("C").isD()).toBeFalsy();
        expect(new Name("E").isD()).toBeFalsy();
        expect(new Name("F").isD()).toBeFalsy();
        expect(new Name("G").isD()).toBeFalsy();
        expect(new Name("A").isD()).toBeFalsy();
        expect(new Name("B").isD()).toBeFalsy();
      });
    });
  });

  describe("#E", () => {
    describe("when the note is E", () => {
      it("returns true", () => {
        expect(new Name("E").isE()).toBeTruthy();
      });
    });

    describe("when the note is not E", () => {
      it("returns false", () => {
        expect(new Name("C").isE()).toBeFalsy();
        expect(new Name("D").isE()).toBeFalsy();
        expect(new Name("F").isE()).toBeFalsy();
        expect(new Name("G").isE()).toBeFalsy();
        expect(new Name("A").isE()).toBeFalsy();
        expect(new Name("B").isE()).toBeFalsy();
      });
    });
  });

  describe("#F", () => {
    describe("when the note is F", () => {
      it("returns true", () => {
        expect(new Name("F").isF()).toBeTruthy();
      });
    });

    describe("when the note is not F", () => {
      it("returns false", () => {
        expect(new Name("C").isF()).toBeFalsy();
        expect(new Name("D").isF()).toBeFalsy();
        expect(new Name("E").isF()).toBeFalsy();
        expect(new Name("G").isF()).toBeFalsy();
        expect(new Name("A").isF()).toBeFalsy();
        expect(new Name("B").isF()).toBeFalsy();
      });
    });
  });

  describe("#G", () => {
    describe("when the note is G", () => {
      it("returns true", () => {
        expect(new Name("G").isG()).toBeTruthy();
      });
    });

    describe("when the note is not G", () => {
      it("returns false", () => {
        expect(new Name("C").isG()).toBeFalsy();
        expect(new Name("D").isG()).toBeFalsy();
        expect(new Name("E").isG()).toBeFalsy();
        expect(new Name("F").isG()).toBeFalsy();
        expect(new Name("A").isG()).toBeFalsy();
        expect(new Name("B").isG()).toBeFalsy();
      });
    });
  });

  describe("#A", () => {
    describe("when the note is A", () => {
      it("returns true", () => {
        expect(new Name("A").isA()).toBeTruthy();
      });
    });

    describe("when the note is not A", () => {
      it("returns false", () => {
        expect(new Name("C").isA()).toBeFalsy();
        expect(new Name("D").isA()).toBeFalsy();
        expect(new Name("E").isA()).toBeFalsy();
        expect(new Name("F").isA()).toBeFalsy();
        expect(new Name("G").isA()).toBeFalsy();
        expect(new Name("B").isA()).toBeFalsy();
      });
    });
  });

  describe("#B", () => {
    describe("when the note is B", () => {
      it("returns true", () => {
        expect(new Name("B").isB()).toBeTruthy();
      });
    });

    describe("when the note is not B", () => {
      it("returns false", () => {
        expect(new Name("C").isB()).toBeFalsy();
        expect(new Name("D").isB()).toBeFalsy();
        expect(new Name("E").isB()).toBeFalsy();
        expect(new Name("F").isB()).toBeFalsy();
        expect(new Name("G").isB()).toBeFalsy();
        expect(new Name("A").isB()).toBeFalsy();
      });
    });
  });
});
