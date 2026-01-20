import { Interval } from '../interval';
import { Note } from '../note';

type Group = Note[];

export class InputSanitization {
  private notes: Note[];
  private groups: Group[] = [];

  public constructor(private input: string | Note[]) {
    this.notes = [];
  }

  public call(): Group[] {
    return this.parse().removeDuplicates().removeOctaveDuplicates().sortByMidiValue().group().getValidGroups();
  }

  private parse(): InputSanitization {
    if (Array.isArray(this.input)) {
      if (!this.input.length) {
        throw new Error('Input must not be an empty array');
      }

      this.notes = this.input;
    } else {
      if (!this.input) {
        throw new Error('Input must not be an empty string');
      }

      this.notes = this.input.split(' ').map((note) => new Note(note));
    }

    return this;
  }

  private removeDuplicates() {
    this.notes = Object.values(
      this.notes.reduce<{ [midiValue: number]: Note }>((map, note) => {
        if (map[note.getMidiValue()] !== undefined) {
          return map;
        }

        return { ...map, [note.getMidiValue()]: note };
      }, {}),
    );

    return this;
  }

  private removeOctaveDuplicates() {
    this.notes = Object.values(
      this.notes.reduce<{ [keyIndex: number]: Note }>((map, note) => {
        const existingNote = map[note.getKeyIndex()];
        if (existingNote !== undefined && note.isGreaterThan(existingNote)) {
          return map;
        }

        return { ...map, [note.getKeyIndex()]: note };
      }, {}),
    );

    return this;
  }

  private sortByMidiValue() {
    this.notes.sort((a, b) => a.getMidiValue() - b.getMidiValue());

    return this;
  }

  private group() {
    this.groups = [[this.notes[0]]];

    this.notes.slice(1).forEach((note) => {
      if (this.isInCurrentGroup(note)) {
        this.addToGroup(note);
      } else {
        this.createNewGroup(note);
      }
    });

    return this;
  }

  private createNewGroup(note: Note) {
    this.groups.push([note]);
  }

  private addToGroup(note: Note) {
    this.currentGroup().push(note);
  }

  private isInCurrentGroup(note: Note) {
    return Interval.between(this.currentNote(), note).isWithinSemitones(7);
  }

  private currentNote() {
    return this.currentGroup()[this.currentGroup().length - 1];
  }

  private currentGroup() {
    return this.groups[this.groups.length - 1];
  }

  private getValidGroups() {
    return this.groups.filter((g) => g.length >= 3);
  }
}
