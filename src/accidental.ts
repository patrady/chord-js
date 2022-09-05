type Accidentals = "b" | "#" | "♮";

export abstract class Accidental {
  public static flat() {
    return new Flat();
  }
  public static sharp() {
    return new Sharp();
  }
  public static natural() {
    return new Natural();
  }

  public static for(value?: string) {
    const res = this.parse(value);
    switch (res) {
      case Sharp.value:
        return new Sharp();
      case Flat.value:
        return new Flat();
      case Natural.value:
      default:
        return new Natural();
    }
  }

  public isFlat() {
    return false;
  }

  public isSharp() {
    return false;
  }

  public isNatural() {
    return false;
  }

  public abstract getValue(): string;

  public abstract getKeyIndex(): number;

  private static parse(value?: string): Accidentals {
    if (!value || !this.isValid(value)) {
      return Natural.value as Accidentals;
    }

    return value as Accidentals;
  }

  private static isValid(value: string) {
    return (
      value === Flat.value || value === Sharp.value || value === Natural.value
    );
  }
}

export class Flat extends Accidental {
  static value = "b";

  public isFlat() {
    return true;
  }

  public getValue() {
    return Flat.value;
  }

  public getKeyIndex(): number {
    return -1;
  }
}

export class Natural extends Accidental {
  static value = "♮";

  public isNatural() {
    return true;
  }

  public getValue() {
    return "";
  }

  public getKeyIndex(): number {
    return 0;
  }
}

export class Sharp extends Accidental {
  static value = "#";

  public isSharp() {
    return true;
  }

  public getValue() {
    return Sharp.value;
  }

  public getKeyIndex(): number {
    return 1;
  }
}
