# Chord JS

Chord JS is a music theory package that identifies notes, chords, and key signatures on an 88-key piano.

## Quick Reference

```ts
import { Note, Chord, KeySignature, KeySignatureOfD, Interval } from '@patrady/chord-js';

// Create notes
const note = new Note('C#4');           // From string (note + accidental + octave)
const midi = Note.fromMidi(60);         // From MIDI value (60 = C4)

// Identify chords
Chord.for('C E G')?.getName();          // "C" (C major)
Chord.for('A C E')?.getName();          // "Am" (A minor)
Chord.for([note1, note2, note3]);       // Also accepts Note array

// Work with key signatures
KeySignature.for('D')?.getNotes();      // D major scale notes
new KeySignatureOfD().normalize(new Note('Gb'));  // Returns F# (enharmonic)
new KeySignatureOfD().isInKey(new Note('F#'));    // true

// Calculate intervals
Interval.between(new Note('C4'), new Note('G4')).getSemitones();  // 7 (perfect 5th)
```

## Installation

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
import { Chord, Note } from '@patrady/chord-js';

// From a space-separated string
const chord = Chord.for('C E G');
chord?.getName(); // C

// From an array of Note objects (useful for MIDI input)
const C = Note.fromMidi(60);
const E = Note.fromMidi(64);
const G = Note.fromMidi(67);
Chord.for([C, E, G])?.getName(); // C
```

This table shows the type of supported chords with examples

| Chord                                                                                          | Example                              |
|------------------------------------------------------------------------------------------------|--------------------------------------|
| [Major](https://en.wikipedia.org/wiki/Major_chord)                                             | `Chord.for("C E G"); // C`           |
| [Minor](https://en.wikipedia.org/wiki/Minor_chord)                                             | `Chord.for("C Eb G"); // Cm`         |
| [Suspended](https://en.wikipedia.org/wiki/Suspended_chord)                                     | `Chord.for("C F G"); // Csus`        |
| [Suspended Second](https://en.wikipedia.org/wiki/Suspended_chord)                              | `Chord.for("C D G"); // Csus2`       |
| [Augmented](https://en.wikipedia.org/wiki/Augmented_triad)                                     | `Chord.for("C E G#"); // Caug`       |
| [Diminished](https://en.wikipedia.org/wiki/Diminished_triad)                                   | `Chord.for("C Eb Gb"); // Cdim`      |
| [Inverted](https://en.wikipedia.org/wiki/Major_chord#Inversions)                               | `Chord.for("E G C"); // C/E`         |
| [Sixth](https://en.wikipedia.org/wiki/Sixth_chord)                                             | `Chord.for("C E G A"); // C6`        |
| [Minor Sixth](https://en.wikipedia.org/wiki/Sixth_chord)                                       | `Chord.for('C Eb G A'); // Cm6`      |
| [Dominant Seventh](https://en.wikipedia.org/wiki/Dominant_seventh_chord)                       | `Chord.for("C E G Bb"); // C7`       |
| [Diminished Seventh](https://en.wikipedia.org/wiki/Diminished_seventh_chord)                   | `Chord.for("C Eb Gb A"); // Cdim7`   |
| [Augmented Seventh](https://en.wikipedia.org/wiki/Augmented_seventh_chord)                     | `Chord.for("C E G# Bb"); // C+7`     |
| [Major Seventh](https://en.wikipedia.org/wiki/Major_seventh_chord)                             | `Chord.for("C E G B"); // Cmaj7`     |
| [Augmented Major Seventh](https://en.wikipedia.org/wiki/Augmented_major_seventh_chord)         | `Chord.for("C E G# B"); // Cmaj+7`   |
| [Minor Seventh](https://en.wikipedia.org/wiki/Minor_seventh_chord)                             | `Chord.for("C Eb G Bb"); // Cm7`     |
| [Minor Major Seventh](https://en.wikipedia.org/wiki/Minor_major_seventh_chord)                 | `Chord.for("C Eb G B"); // Cm7+`     |
| [Half-Diminished Seventh](https://en.wikipedia.org/wiki/Half-diminished_seventh_chord)         | `Chord.for("C Eb Gb Bb"); // Cø7`    |
| [Seventh Suspended Fourth](https://en.wikipedia.org/wiki/Suspended_chord)                      | `Chord.for("C F G Bb"); // C7sus4`   |
| [Seventh Suspended Second](https://en.wikipedia.org/wiki/Suspended_chord)                      | `Chord.for("C D G Bb"); // C7sus2`   |
| [Add Ninth](https://en.wikipedia.org/wiki/Ninth_chord#Relation_to_other_chords_with_the_ninth) | `Chord.for("C E G D5"); // Cadd9`    |
| [Dominant Ninth](https://en.wikipedia.org/wiki/Ninth_chord#Dominant_ninth)                     | `Chord.for("C E G Bb D5"); // C9`    |
| [Dominant Minor Ninth](https://en.wikipedia.org/wiki/Ninth_chord#Dominant_minor_ninth)         | `Chord.for("C E G Bb Db5"); // C7b9` |
| [Minor Ninth](https://en.wikipedia.org/wiki/Ninth_chord#Minor_ninth)                           | `Chord.for("C Eb G Bb D5"); // Cm9`  |
| [Major Ninth](https://en.wikipedia.org/wiki/Ninth_chord#Major_ninth)                           | `Chord.for("C E G B D5"); // Cmaj9`  |

### Key Signatures

A Key Signature is a combination of sharps and flats at the beginning of each stave.

You can create key signatures in two ways:

```ts
// Option 1: Using the factory method (dynamic)
import { KeySignature } from '@patrady/chord-js';

const key = KeySignature.for('D');
key?.getNotes();  // D, E, F#, G, A, B, C#, D

// Option 2: Using the class directly
import { KeySignatureOfD } from '@patrady/chord-js';

new KeySignatureOfD().getNotes(); // D, E, F#, G, A, B, C#, D
```

Key signatures can normalize enharmonic notes and check membership:

```ts
import { Note, KeySignatureOfD } from '@patrady/chord-js';

new KeySignatureOfD().normalize(new Note('Gb')); // F#

new KeySignatureOfD().isInKey(new Note('Gb')); // false
new KeySignatureOfD().isInKey(new Note('F#')); // true
```

| Attribute         | Description                                                            | Example                                                         |
|-------------------|------------------------------------------------------------------------|-----------------------------------------------------------------|
| `getNotes()`      | Returns an array of eight notes from the base to the octave.           | `new KeySignatureOfD().getNotes(); // D, E, F#, G, A, B, C#, D` |
| `normalize(note)` | Normalizes a note from one key signature to the current key signature. | `new KeySignatureOfD().normalize(new Note("Gb")); // F#`        |
| `isInKey(note)`   | Returns whether a note is in the key signature                         | `new KeySignatureOfD().isInKey(new Note("Gb")); // false`       |

### Supported Key Signatures

All major key signatures are supported, including theoretical ones that use double sharps or double flats:

| Key Signature | Name                   |
|---------------|------------------------|
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

A Note is the fundamental element of music. Notes are simply frequencies and are used to create [chords](#chords)
and [key signatures](#key-signatures).

```ts
import { Note } from '@patrady/chord-js';

const note = new Note('Eb4');
```

| Attribute             | Description                                                                                        | Example                             |
|-----------------------|----------------------------------------------------------------------------------------------------|-------------------------------------|
| `getName()`           | The name of the note and accidental                                                                | `note.getName(); // Eb`             |
| `getScientificName()` | The name of the note, accidental, and octave                                                       | `note.getScientificName(); // Eb4`  |
| `getOctave()`         | The octave between 0 and 8                                                                         | `note.getOctave(); // 4`            |
| `getFrequency()`      | The frequency in Hz, up to 5 decimal places                                                        | `note.getFrequency(); // 311.12698` |
| `getKeyNumber()`      | The [number](https://en.wikipedia.org/wiki/Piano_key_frequencies) of the key on an 88-key piano    | `note.getKeyNumber(); // 43`        |
| `getMidiValue()`      | The [MIDI note](https://en.wikipedia.org/wiki/Piano_key_frequencies) of the key on an 88-key piano | `note.getMidiValue(); // 63`        |

## MIDI Keyboard

When interacting with a MIDI keyboard and you want to convert
a [MIDI value](https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies) to a note, use

```ts
import { Note } from '@patrady/chord-js';

const note = Note.fromMidi(24);

note.getScientificName(); // C1
```

For [enharmonic](https://en.wikipedia.org/wiki/Enharmonic) notes, the MIDI value will be the same. For example, C# and
Db in the 1st octave will have the same MIDI value of 25.
To choose a specific enharmonic, normalize the note to a key signature:

```ts
import { Note, KeySignatureOfD, KeySignatureOfDb } from '@patrady/chord-js';

const note = Note.fromMidi(25);

new KeySignatureOfD().normalize(note); // C#
new KeySignatureOfDb().normalize(note); // Db
```

## Intervals

Calculate the interval (distance in semitones) between two notes:

```ts
import { Interval, Note } from '@patrady/chord-js';

// Using strings
const interval = Interval.between('C4', 'G4');
interval.getSemitones();    // 7
interval.isPerfect5th();    // true
interval.isMajor3rd();      // false

// Using Note objects
const c4 = new Note('C4');
const g4 = new Note('G4');
Interval.between(c4, g4).isPerfect5th();  // true
```

The `Interval` class also provides semitone constants:

```ts
Interval.isNone();      // 0 (unison)
Interval.major2nd();    // 2
Interval.major3rd();    // 4
Interval.perfect4th();  // 5
Interval.perfect5th();  // 7
Interval.major6th();    // 9
Interval.major7th();    // 11
Interval.octave();      // 12
```

### Interval Check Methods

The `DefinedInterval` object (returned by `Interval.between()`) provides these check methods:

| Method              | Semitones |
|---------------------|-----------|
| `isNone()`          | 0         |
| `isMinor2nd()`      | 1         |
| `isMajor2nd()`      | 2         |
| `isMinor3rd()`      | 3         |
| `isMajor3rd()`      | 4         |
| `isDiminished4th()` | 4         |
| `isPerfect4th()`    | 5         |
| `isAugmented4th()`  | 6         |
| `isDiminished5th()` | 6         |
| `isPerfect5th()`    | 7         |
| `isAugmented5th()`  | 8         |
| `isMinor6th()`      | 8         |
| `isMajor6th()`      | 9         |
| `isDiminished7th()` | 9         |
| `isMinor7th()`      | 10        |
| `isMajor7th()`      | 11        |

## Accidentals

Notes support sharps, flats, double sharps, and double flats:

```ts
import { Note } from '@patrady/chord-js';

new Note('C#4');   // C sharp
new Note('Db4');   // D flat
new Note('F𝄪4');   // F double sharp (enharmonic to G)
new Note('B𝄫4');   // B double flat (enharmonic to A)
```

Note: Double sharp uses the Unicode character `𝄪` (U+1D12A) and double flat uses `𝄫` (U+1D12B).

## Note Comparison

Notes can be compared for equality and ordering:

```ts
import { Note } from '@patrady/chord-js';

const c4 = new Note('C4');
const db4 = new Note('Db4');
const cSharp4 = new Note('C#4');

// Exact equality (same name, accidental, and octave)
c4.equals(new Note('C4'));        // true
cSharp4.equals(db4);              // false (different spelling)

// Enharmonic equality (same pitch/MIDI value)
cSharp4.matches(db4);             // true (same key on piano)

// Ordering
c4.isLessThan(db4);               // true
db4.isGreaterThan(c4);            // true
```
