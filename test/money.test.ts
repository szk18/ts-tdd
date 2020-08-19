import { Money } from "../src/Money";

describe("dollar", () => {
  test("multiplication", () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toStrictEqual(Money.dollar(10));
    expect(five.times(3)).toStrictEqual(Money.dollar(15));
  });

  test("equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  });
});

describe("franc", () => {
  test("multiplication", () => {
    const five = Money.franc(5);
    expect(five.times(2)).toStrictEqual(Money.franc(10));
    expect(five.times(3)).toStrictEqual(Money.franc(15));
  });

  test("equality", () => {
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  });
});

test("not equal dollar and franc", () => {
  expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});
