export class Money {
  protected amount: number;
  protected curr: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.curr = currency;
  }
  equals(object: Money): boolean {
    const money: Money = object;
    return this.amount === money.amount && this.currency() === money.currency();
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.curr);
  }
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
  currency(): string {
    return this.curr;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
