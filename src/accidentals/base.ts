export abstract class Base {
  public abstract getValue(): string;

  public abstract getKeyIndex(): number;
  
  public isMatch(value: string): boolean {
    return this.getValue() === value;
  }
}
