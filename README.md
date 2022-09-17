# Chord JS

Chord JS is a music theory package that identifies notes, chords, and key signatures on an 88-key piano.

To install run

```bash
npm install @patrady/chord-js
```

or if you're using yarn

```bash
yarn add @patrady/chord-js
```

## Notes

```ts
const note = new Note('Eb4');
```

| Attribute             | Description                                                                                        | Example                             |
| --------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `getName()`           | The name of the note and accidental                                                                | `note.getName(); // Eb`             |
| `getScientificName()` | The name of the note, accidental, and octave                                                       | `note.getScientificName(); // Eb4`  |
| `getOctave()`         | The octave between 0 and 8 inclusive                                                               | `note.getOctave(); // 4`            |
| `getFrequency()`      | The frequency in Hz, up to 5 decimal places                                                        | `note.getFrequency(); // 311.12698` |
| `getKeyNumber()`      | The [number](https://en.wikipedia.org/wiki/Piano_key_frequencies) of the key on an 88-key piano    | `note.getKeyNumber(); // 43`        |
| `getMidiValue()`      | The [MIDI note](https://en.wikipedia.org/wiki/Piano_key_frequencies) of the key on an 88-key piano | `note.getMidiValue(); // 63`        |

### Using a MIDI Keyboard

When interacting with a MIDI keyboard and you want to convert a [MIDI value](https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies) into a note, use

```ts
const note = Note.fromMidi(24);

note.getScientificName(); // C1
```

## Supported Chords

This package can also recognize a number of different chords and their inversions. 

| Chord              | Example                                       |
| ------------------ | --------------------------------------------- |
| Major              | `Chord.for("C E G")?.getName(); // C`         |
| Minor              | `Chord.for("C Eb G")?.getName(); // Cm`       |
| Suspended          | `Chord.for("C F G")?.getName(); // Csus`      |
| Suspended Second   | `Chord.for("C D G")?.getName(); // Csus2`     |
| Augmented          | `Chord.for("C E G#")?.getName(); // Caug`     |
| Diminished         | `Chord.for("C Eb Gb")?.getName(); // Cdim`    |
| Inverted           | `Chord.for("E G C")?.getName(); // C/E`       |
| Dominant Seventh   | `Chord.for("C E G Bb")?.getName(); // C7`     |
| Major Seventh      | `Chord.for("C E G B")?.getName(); // Cmaj7`   |
| Minor Seventh      | `Chord.for("C Eb G Bb")?.getName(); // Cm7`   |
| Diminished Seventh | `Chord.for("C Eb Gb A")?.getName(); // Cdim7` |
