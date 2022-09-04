import { Chord } from "../chord";

it("works", () => {
  expect(Chord.for("C E G")).toEqual("C Major");
});
