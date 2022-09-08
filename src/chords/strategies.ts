import { AugmentedChord } from "./augmentedChord";
import { DiminishedChord } from "./diminishedChord";
import { DiminishedSeventhChord } from "./diminishedSeventhChord";
import { DominantSeventhChord } from "./dominantSeventhChord";
import { MajorChord } from "./majorChord";
import { MajorSeventhChord } from "./majorSeventhChord";
import { MinorChord } from "./minorChord";
import { MinorSeventhChord } from "./minorSeventhChord";
import { SuspendedChord } from "./suspendedChord";
import { SuspendedSecondChord } from "./suspendedSecondChord";

export const strategies = [
  MajorChord,
  MinorChord,
  SuspendedChord,
  SuspendedSecondChord,
  AugmentedChord,
  DiminishedChord,
  DominantSeventhChord,
  MajorSeventhChord,
  MinorSeventhChord,
  DiminishedSeventhChord
];
