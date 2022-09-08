# Chord JS

Chord JS identifies chords based on their notes

To install run

```bash
npm install chord-js
```

or if you're using yarn 

```bash
yarn add chord-js
```

## Supported Chords

| Chord              | Support    | Example                                       |
| ------------------ | ---------- | --------------------------------------------- |
| Major              | ✅        | `Chord.for("C E G")?.getName(); // C`         |
| Minor              | ✅        | `Chord.for("C Eb G")?.getName(); // Cm`       |
| Suspended          | ✅        | `Chord.for("C F G")?.getName(); // Csus`      |
| Suspended Second   | ✅        | `Chord.for("C D G")?.getName(); // Csus2`     |
| Augmented          | ✅        | `Chord.for("C E G#")?.getName(); // Caug`     |
| Diminished         | ✅        | `Chord.for("C Eb Gb")?.getName(); // Cdim`    |
| Inverted           | ✅        | `Chord.for("E G C")?.getName(); // C/E`       |
| Dominant Seventh   | ✅        | `Chord.for("C E G Bb")?.getName(); // C7`     |
| Major Seventh      | ✅        | `Chord.for("C E G B")?.getName(); // Cmaj7`   |
| Minor Seventh      | ✅        | `Chord.for("C Eb G Bb")?.getName(); // Cm7`   |
| Diminished Seventh | ✅        | `Chord.for("C Eb Gb A")?.getName(); // Cdim7` |
