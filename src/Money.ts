import { Expression } from "./Expression";

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
    return new Money(this.amount + addend.amount, this.curr);
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
