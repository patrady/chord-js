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

## Chords

To translate a series of notes into a chord, use

```ts
import { Chord } from '@patrady/chord-js';

const chord = new Chord.for('C E G');

chord?.getName(); // C
```

This table shows the type of supported chords with examples

| Chord                                                                                  | Example                            |
| -------------------------------------------------------------------------------------- | ---------------------------------- |
| [Major](https://en.wikipedia.org/wiki/Major_chord)                                     | `Chord.for("C E G"); // C`         |
| [Minor](https://en.wikipedia.org/wiki/Minor_chord)                                     | `Chord.for("C Eb G"); // Cm`       |
| [Suspended](https://en.wikipedia.org/wiki/Suspended_chord)                             | `Chord.for("C F G"); // Csus`      |
| [Suspended Second](https://en.wikipedia.org/wiki/Suspended_chord)                      | `Chord.for("C D G"); // Csus2`     |
| [Augmented](https://en.wikipedia.org/wiki/Augmented_triad)                             | `Chord.for("C E G#"); // Caug`     |
| [Diminished](https://en.wikipedia.org/wiki/Diminished_triad)                           | `Chord.for("C Eb Gb"); // Cdim`    |
| [Inverted](https://en.wikipedia.org/wiki/Major_chord#Inversions)                       | `Chord.for("E G C"); // C/E`       |
| [Sixth](https://en.wikipedia.org/wiki/Sixth_chord)                                     | `Chord.for("C E G A"); // C6`      |
| [Minor Sixth](https://en.wikipedia.org/wiki/Sixth_chord)                               | `Chord.for('C Eb G A'); // Cm6`    |
| [Dominant Seventh](https://en.wikipedia.org/wiki/Dominant_seventh_chord)               | `Chord.for("C E G Bb"); // C7`     |
| [Diminished Seventh](https://en.wikipedia.org/wiki/Diminished_seventh_chord)           | `Chord.for("C Eb Gb A"); // Cdim7` |
| [Augmented Seventh](https://en.wikipedia.org/wiki/Augmented_seventh_chord)             | `Chord.for("C E G# Bb"); // C+7`   |
| [Major Seventh](https://en.wikipedia.org/wiki/Major_seventh_chord)                     | `Chord.for("C E G B"); // Cmaj7`   |
| [Augmented Major Seventh](https://en.wikipedia.org/wiki/Augmented_major_seventh_chord) | `Chord.for("C E G# B"); // Cmaj+7` |
| [Minor Seventh](https://en.wikipedia.org/wiki/Minor_seventh_chord)                     | `Chord.for("C Eb G Bb"); // Cm7`   |
| [Minor Major Seventh](https://en.wikipedia.org/wiki/Minor_major_seventh_chord)         | `Chord.for("C Eb G B"); // Cm7+`   |
| [Half-Diminished Seventh](https://en.wikipedia.org/wiki/Half-diminished_seventh_chord) | `Chord.for("C Eb Gb Bb"); // Cø7`  |

### Key Signatures

A Key Signature is a combination of sharps and flats at the beginning of each stave.

```ts
import { Note, KeySignatureOfD } from '@patrady/chord-js';

new KeySignatureOfD().getNotes(); // D, E, F#, G, A, B, C#, D

new KeySignatureOfD().normalize(new Note('Gb')); // F#

new KeySignatureOfD().isInKey(new Note('Gb')); // false
new KeySignatureOfD().isInKey(new Note('F#')); // true
```

| Attribute         | Description                                                            | Example                                                         |
| ----------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| `getNotes()`      | Returns an array of eight notes from the base to the octave.           | `new KeySignatureOfD().getNotes(); // D, E, F#, G, A, B, C#, D` |
| `normalize(note)` | Normalizes a note from one key signature to the current key signature. | `new KeySignatureOfD().normalize(new Note("Gb")); // F#`        |
| `isInKey(note)`   | Returns whether a note is in the key signature                         | `new KeySignatureOfD().isInKey(new Note("Gb")); // false`       |

### Supported Key Signatures

All major key signatures are supported, including theoretical ones that use double sharps or double flats:

| Key Signature | Name                   |
| ------------- | ---------------------- |
| C             | `KeySignatureOfC`      |
| Cb            | `KeySignatureOfCb`     |
| C#            | `KeySignatureOfCSharp` |
| D             | `KeySignatureOfD`      |
| Db            | `KeySignatureOfDb`     |
| D#            | `KeySignatureOfDSharp` |
| E             | `KeySignatureOfE`      |
| Eb            | `KeySignatureOfEb`     |
| E#            | `KeySignatureOfESharp` |
| F             | `KeySignatureOfF`      |
| Fb            | `KeySignatureOfFb`     |
| F#            | `KeySignatureOfFSharp` |
| G             | `KeySignatureOfG`      |
| Gb            | `KeySignatureOfGb`     |
| G#            | `KeySignatureOfGSharp` |
| A             | `KeySignatureOfA`      |
| Ab            | `KeySignatureOfAb`     |
| A#            | `KeySignatureOfASharp` |
| B             | `KeySignatureOfB`      |
| Bb            | `KeySignatureOfBb`     |
| B#            | `KeySignatureOfBSharp` |


## Notes

A Note is the fundamental element of music. Notes are simply frequencies and are used to create [chords](#chords) and [key signatures](#key-signatures).

```ts
import { Note } from '@patrady/chord-js';

const note = new Note('Eb4');
```

| Attribute             | Description                                                                                        | Example                             |
| --------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `getName()`           | The name of the note and accidental                                                                | `note.getName(); // Eb`             |
| `getScientificName()` | The name of the note, accidental, and octave                                                       | `note.getScientificName(); // Eb4`  |
| `getOctave()`         | The octave between 0 and 8                                                                         | `note.getOctave(); // 4`            |
| `getFrequency()`      | The frequency in Hz, up to 5 decimal places                                                        | `note.getFrequency(); // 311.12698` |
| `getKeyNumber()`      | The [number](https://en.wikipedia.org/wiki/Piano_key_frequencies) of the key on an 88-key piano    | `note.getKeyNumber(); // 43`        |
| `getMidiValue()`      | The [MIDI note](https://en.wikipedia.org/wiki/Piano_key_frequencies) of the key on an 88-key piano | `note.getMidiValue(); // 63`        |

## MIDI Keyboard

When interacting with a MIDI keyboard and you want to convert a [MIDI value](https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies) to a note, use

```ts
import { Note } from '@patrady/chord-js';

const note = Note.fromMidi(24);

note.getScientificName(); // C1
```

For [enharmonic](https://en.wikipedia.org/wiki/Enharmonic) notes, the MIDI value will be the same. For example, C# and Db in the 1st octave will have the same MIDI value of 25.
To choose a specific enharmonic, normalize the note to a key signature:

```ts
import { Note, KeySignatureOfD, KeySignatureOfDb } from '@patrady/chord-js';

const note = Note.fromMidi(25);

new KeySignatureOfD().normalize(note); // C#
new KeySignatureOfDb().normalize(note); // Db
```

A chord can also be determined from the MIDI notes like so

```ts
import { Note } from '@patrady/chord-js';

const C = Note.fromMidi(60);
const E = Note.fromMidi(64);
const G = Note.fromMidi(67);

Chord.for([C, E, G])?.getName(); // C
```
