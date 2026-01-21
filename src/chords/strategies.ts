import { AddNinthChord } from './addNinthChord';
import { AugmentedChord } from './augmentedChord';
import { AugmentedNinthChord } from './augmentedNinthChord';
import { DiminishedChord } from './diminishedChord';
import { DiminishedSeventhChord } from './diminishedSeventhChord';
import { DominantEleventhChord } from './dominantEleventhChord';
import { DominantMinorNinthChord } from './dominantMinorNinthChord';
import { DominantNinthChord } from './dominantNinthChord';
import { DominantSeventhChord } from './dominantSeventhChord';
import { DominantSeventhFlat5Chord } from './dominantSeventhFlat5Chord';
import { DominantSeventhFlat5Flat9Chord } from './dominantSeventhFlat5Flat9Chord';
import { DominantSeventhFlat5Sharp9Chord } from './dominantSeventhFlat5Sharp9Chord';
import { DominantSeventhSharp5Chord } from './dominantSeventhSharp5Chord';
import { DominantSeventhSharp5Flat9Chord } from './dominantSeventhSharp5Flat9Chord';
import { DominantSeventhSharp5Sharp9Chord } from './dominantSeventhSharp5Sharp9Chord';
import { DominantSeventhSharp9Chord } from './dominantSeventhSharp9Chord';
import { DominantSeventhSharpEleventhChord } from './dominantSeventhSharpEleventhChord';
import { DominantSeventhSuspendedChord } from './dominantSeventhSuspendedChord';
import { DominantSeventhSuspendedSecondChord } from './dominantSeventhSuspendedSecondChord';
import { DominantSharpEleventhChord } from './dominantSharpEleventhChord';
import { HalfDiminishedSeventhChord } from './halfDiminishedSeventhChord';
import { MajorChord } from './majorChord';
import { MajorEleventhChord } from './majorEleventhChord';
import { MajorNinthChord } from './majorNinthChord';
import { MajorNinthSharp5Chord } from './majorNinthSharp5Chord';
import { MajorNinthSharpEleventhChord } from './majorNinthSharpEleventhChord';
import { MajorSeventhChord } from './majorSeventhChord';
import { MajorSeventhSharpEleventhChord } from './majorSeventhSharpEleventhChord';
import { MajorSeventhSuspendedChord } from './majorSeventhSuspendedChord';
import { MajorSeventhSuspendedSecondChord } from './majorSeventhSuspendedSecondChord';
import { SixthChord } from './sixthChord';
import { SixNinthChord } from './sixNinthChord';
import { MinorChord } from './minorChord';
import { MinorEleventhChord } from './minorEleventhChord';
import { MinorEleventhFlat5Chord } from './minorEleventhFlat5Chord';
import { MinorNinthChord } from './minorNinthChord';
import { MinorNinthFlat5Chord } from './minorNinthFlat5Chord';
import { MinorSeventhChord } from './minorSeventhChord';
import { MinorSixNinthChord } from './minorSixNinthChord';
import { SuspendedChord } from './suspendedChord';
import { SuspendedNinthChord } from './suspendedNinthChord';
import { SuspendedSecondChord } from './suspendedSecondChord';
import { MinorSixthChord } from './minorSixthChord';
import { MinorMajorSeventhChord } from './minorMajorSeventh';
import { NinthSuspendedChord } from './ninthSuspendedChord';
import { AugmentedSeventhChord } from './augmentedSeventhChord';
import { AugmentedMajorSeventhChord } from './augmentedMajorSeventhChord';

export const strategies = [
  // 6-note chords (11th chords) - check first
  MajorNinthSharpEleventhChord,
  DominantSharpEleventhChord,
  MinorEleventhFlat5Chord,
  DominantEleventhChord,
  MinorEleventhChord,
  MajorEleventhChord,

  // 5-note chords (9th and extended chords)
  DominantSeventhFlat5Flat9Chord,
  DominantSeventhFlat5Sharp9Chord,
  DominantSeventhSharp5Flat9Chord,
  DominantSeventhSharp5Sharp9Chord,
  DominantSeventhSharp9Chord,
  DominantMinorNinthChord,
  MinorNinthFlat5Chord,
  MajorNinthSharp5Chord,
  AugmentedNinthChord,
  DominantNinthChord,
  MinorNinthChord,
  MajorNinthChord,
  SixNinthChord,
  MinorSixNinthChord,
  NinthSuspendedChord,

  // 5-note chords (7#11 without 9th)
  DominantSeventhSharpEleventhChord,
  MajorSeventhSharpEleventhChord,

  // 4-note chords (7th and 6th chords, suspended with 9th)
  SuspendedNinthChord,
  DominantSeventhFlat5Chord,
  DominantSeventhSuspendedChord,
  DominantSeventhSuspendedSecondChord,
  MajorSeventhSuspendedChord,
  MajorSeventhSuspendedSecondChord,
  AugmentedSeventhChord,
  DominantSeventhSharp5Chord,
  AugmentedMajorSeventhChord,
  MinorMajorSeventhChord,
  HalfDiminishedSeventhChord,
  DiminishedSeventhChord,
  DominantSeventhChord,
  MajorSeventhChord,
  MinorSeventhChord,
  SixthChord,
  MinorSixthChord,
  AddNinthChord,

  // 3-note chords (triads)
  SuspendedChord,
  SuspendedSecondChord,
  AugmentedChord,
  DiminishedChord,
  MajorChord,
  MinorChord,
];
