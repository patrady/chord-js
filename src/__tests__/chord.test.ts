import { Chord } from "../chord";

it("#getName", () => {
  expect(new Chord("C E G").getName()).toEqual("C Major");
  expect(new Chord("C# E# G#").getName()).toEqual("C# Major");
  expect(new Chord("Db F Ab").getName()).toEqual("Db Major");
  expect(new Chord("D F# A").getName()).toEqual("D Major");
  expect(new Chord("Eb G Bb").getName()).toEqual("Eb Major");
  expect(new Chord("E G# B").getName()).toEqual("E Major");
  expect(new Chord("F A C").getName()).toEqual("F Major");
  expect(new Chord("F# A# C#").getName()).toEqual("F# Major");
  expect(new Chord("Gb Bb Db").getName()).toEqual("Gb Major");
  expect(new Chord("G B D").getName()).toEqual("G Major");
  expect(new Chord("G# B# D#").getName()).toEqual("G# Major");
  expect(new Chord("Ab C Eb").getName()).toEqual("Ab Major");
  expect(new Chord("A C# E").getName()).toEqual("A Major");
  expect(new Chord("Bb D F").getName()).toEqual("Bb Major");
  expect(new Chord("B D# F#").getName()).toEqual("B Major");
});
