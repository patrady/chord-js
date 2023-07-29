import { AugmentedChord } from './augmentedChord';
import { DiminishedChord } from './diminishedChord';
import { DiminishedSeventhChord } from './diminishedSeventhChord';
import { DominantSeventhChord } from './dominantSeventhChord';
import { HalfDiminishedSeventhChord } from './halfDiminishedSeventhChord';
import { MajorChord } from './majorChord';
import { MajorSeventhChord } from './majorSeventhChord';
import { MajorSixthChord } from './majorSixthChord';
import { MinorChord } from './minorChord';
import { MinorSeventhChord } from './minorSeventhChord';
import { SuspendedChord } from './suspendedChord';
import { SuspendedSecondChord } from './suspendedSecondChord';

export const strategies = [
  MajorChord,
  MinorChord,
  SuspendedChord,
  SuspendedSecondChord,
  AugmentedChord,
  DiminishedChord,
  MajorSixthChord,
  DominantSeventhChord,
  MajorSeventhChord,
  MinorSeventhChord,
  HalfDiminishedSeventhChord,
  DiminishedSeventhChord,
];
