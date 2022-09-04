export class Chord {
  static regex =
    /[A-G](b|#)?(maj|min|m|M|\+|-|dim|aug)?[0-9]*(sus)?[0-9]*(\/[A-G](b|#)?)?/g;

  static for(notes: string) {
    return "C Major";
  }
}
