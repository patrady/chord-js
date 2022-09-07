type Accidentals = "b" | "bb" | "#" | "##" | "♮";

export abstract class Accidental {
  public static flat() {
    return new Flat();
  }

  public static doubleFlat() {
    return new DoubleFlat();
  }

  public static sharp() {
    return new Sharp();
  }

  public static doubleSharp() {
    return new DoubleSharp();
  }

  public static natural() {
    return new Natural();
  }

  public static for(value?: string) {
    const res = this.parse(value);
    switch (res) {
      case Sharp.value:
        return new Sharp();
      case DoubleSharp.value:
        return new DoubleSharp();
      case Flat.value:
        return new Flat();
      case DoubleFlat.value:
        return new DoubleFlat();
      case Natural.value:
      default:
        return new Natural();
    }
  }

  public isFlat() {
    return false;
  }

  public isDoubleFlat() {
    return false;
  }

  public isSharp() {
    return false;
  }

  public isDoubleSharp() {
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
      value === Flat.value ||
      value === DoubleFlat.value ||
      value === DoubleSharp.value ||
      value === Sharp.value ||
      value === Natural.value
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

export class DoubleFlat extends Accidental {
  static value = "bb";

  public isDoubleFlat() {
    return true;
  }

  public getValue() {
    return DoubleFlat.value;
  }

  public getKeyIndex(): number {
    return -2;
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

export class DoubleSharp extends Accidental {
  static value = "##";

  public isDoubleSharp() {
    return true;
  }

  public getValue() {
    return DoubleSharp.value;
  }

  public getKeyIndex(): number {
    return 2;
  }
}
