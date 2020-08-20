export class Money implements Expression {
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
  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(to: string): Money {
    return this;
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

export interface Expression {
  reduce(to: string): Money;
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
  reduce(to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
