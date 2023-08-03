import { Note } from "../note";

export class InputSanitization {
  private notes: Note[];

  public constructor(private input: string | Note[]) {
    this.notes = [];
  }

  public getNotes() {
    return this.notes;
  }

  public call(): Note[] {
    return this.parse().removeDuplicates().removeOctaveDuplicates().sortByMidiValue().getNotes();
  }

  private parse(): InputSanitization {
    if (Array.isArray(this.input)) {
      this.notes = this.input;
    } else {
      this.notes = this.input.split(' ').map((note) => new Note(note));
    }

    return this;
  }

  private removeDuplicates() {
    this.notes = Object.values(
      this.notes.reduce<{ [midiValue: number]: Note }>((map, note) => ({ ...map, [note.getMidiValue()]: note }), {}),
    );

    return this;
  }

  private removeOctaveDuplicates() {
    this.notes = Object.values(
      this.notes.reduce<{ [name: string]: Note }>((map, note) => {
        const existingNote = map[note.getName()];
        if (existingNote !== undefined && note.isGreaterThan(existingNote)) {
          return map;
        }

        return { ...map, [note.getName()]: note };
      }, {}),
    );

    return this;
  }

  private sortByMidiValue() {
    this.notes.sort((a, b) => a.getMidiValue() - b.getMidiValue());

    return this;
  }
}
