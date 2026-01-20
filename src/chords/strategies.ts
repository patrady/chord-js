import { AddNinthChord } from './addNinthChord';
import { AugmentedChord } from './augmentedChord';
import { DiminishedChord } from './diminishedChord';
import { DiminishedSeventhChord } from './diminishedSeventhChord';
import { DominantMinorNinthChord } from './dominantMinorNinthChord';
import { DominantNinthChord } from './dominantNinthChord';
import { DominantSeventhChord } from './dominantSeventhChord';
import { DominantSeventhSuspendedChord } from './dominantSeventhSuspendedChord';
import { DominantSeventhSuspendedSecondChord } from './dominantSeventhSuspendedSecondChord';
import { HalfDiminishedSeventhChord } from './halfDiminishedSeventhChord';
import { MajorChord } from './majorChord';
import { MajorNinthChord } from './majorNinthChord';
import { MajorSeventhChord } from './majorSeventhChord';
import { SixthChord } from './sixthChord';
import { MinorChord } from './minorChord';
import { MinorNinthChord } from './minorNinthChord';
import { MinorSeventhChord } from './minorSeventhChord';
import { SuspendedChord } from './suspendedChord';
import { SuspendedSecondChord } from './suspendedSecondChord';
import { MinorSixthChord } from './minorSixthChord';
import { MinorMajorSeventhChord } from './minorMajorSeventh';
import { AugmentedSeventhChord } from './augmentedSeventhChord';
import { AugmentedMajorSeventhChord } from './augmentedMajorSeventhChord';

export const strategies = [
  MajorChord,
  MinorChord,
  SuspendedChord,
  SuspendedSecondChord,
  AugmentedChord,
  DiminishedChord,
  SixthChord,
  MinorSixthChord,
  AddNinthChord,
  DominantSeventhChord,
  DominantSeventhSuspendedChord,
  DominantSeventhSuspendedSecondChord,
  AugmentedSeventhChord,
  MajorSeventhChord,
  AugmentedMajorSeventhChord,
  MinorSeventhChord,
  MinorMajorSeventhChord,
  HalfDiminishedSeventhChord,
  DiminishedSeventhChord,
  DominantNinthChord,
  DominantMinorNinthChord,
  MinorNinthChord,
  MajorNinthChord,
];
