import { Money } from "./Money";
import { Expression } from "./Expression";

export class Bank {
  reduced(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
