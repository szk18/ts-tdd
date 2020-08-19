export abstract class Money {
  protected amount: number;
  abstract times(multiplier: number): Money;
  protected curr: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.curr = currency;
  }
  equals(object: Money): boolean {
    const money: Money = object;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
  currency(): string {
    return this.curr;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
