# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

- **Build**: `yarn build` (cleans lib/ and compiles TypeScript)
- **Test**: `yarn test` (runs Jest)
- **Run single test**: `yarn test <pattern>` (e.g., `yarn test chord.test`)
- **Lint**: `yarn lint` (runs TSLint)
- **Format**: `yarn format` (runs Prettier on src/)

## Architecture

This is a TypeScript music theory library for identifying notes, chords, and key signatures on an 88-key piano.

### Core Classes

**Note** (`src/note.ts`): The fundamental unit representing a musical note with name, accidental, and octave. Can be created from a string (`new Note('Eb4')`) or MIDI value (`Note.fromMidi(63)`). Provides key number, MIDI value, and frequency calculations.

**Chord** (`src/chord.ts`): Abstract class with static `Chord.for()` factory method that identifies chords from notes. Accepts either a space-separated string (`'C E G'`) or an array of Note objects. Uses the Strategy pattern to match input against chord types.

**KeySignature** (`src/keySignature.ts`): Abstract class with static `KeySignature.for()` factory method. Key signatures normalize enharmonic notes (e.g., converting Gb to F# in key of D) and check if notes belong to a key.

**Interval** (`src/interval.ts`): Static utility for interval constants (semitone values). **DefinedInterval** (`src/definedInterval.ts`) represents a calculated interval between two notes with comparison methods like `isMajor3rd()`, `isPerfect5th()`.

### Chord Recognition Pattern

Chord types extend `BaseChord` (`src/chords/baseChord.ts`) and implement:
- `isMatch()`: Returns true if the notes form this chord type (using interval comparisons)
- `getName()`: Returns the chord symbol (e.g., "Cm7")

All chord strategies are registered in `src/chords/strategies.ts`. The `Chord.for()` method iterates through strategies, also checking for inversions via `InvertedChord`.

### Key Signature Pattern

Key signatures extend `BaseKeySignature` (`src/keySignatures/baseKeySignature.ts`) and implement `getNotes()` returning the 8 notes in the scale. The base class provides `normalize()`, `isInKey()`, and `getDegree()` methods.

### Supporting Classes

- **Name** (`src/name.ts`): Note letter (A-G)
- **Accidental** (`src/accidental.ts`): Factory for sharp/flat/natural/double variants
- **Octave** (`src/octave.ts`): Octave number (0-8) with special handling for piano range boundaries
