import { Money, Expression, Sum } from "../src/Money";
import { Bank } from "../src/Bank";

test("multiplication", () => {
  const five = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test("equality", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
});

test("currency", () => {
  expect(Money.dollar(1).currency()).toBe("USD");
  expect(Money.franc(1).currency()).toBe("CHF");
});

test("simple addition", () => {
  const bank = new Bank();
  const five = Money.dollar(5);
  const sum: Expression = five.plus(five);
  const reduced = bank.reduce(sum, "USD");
  expect(reduced).toEqual(Money.dollar(10));
});

test("plus returns sum", () => {
  const five: Money = Money.dollar(5);
  const result = five.plus(five);
  const sum: Sum = result as Sum;
  expect(five).toEqual(sum.augend);
  expect(five).toEqual(sum.addend);
});

test("reduce sum", () => {
  const sum = new Sum(Money.dollar(5), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(9));
});
