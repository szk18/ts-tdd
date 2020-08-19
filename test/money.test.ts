import { Money, Franc } from "../src/Money";

describe("dollar", () => {
  test("multiplication", () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test("equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  });
});

describe("franc", () => {
  test("multiplication", () => {
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });

  test("equality", () => {
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  });
});

test("not equal dollar and franc", () => {
  expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});

describe("currency", () => {
  expect(Money.dollar(1).currency()).toBe("USD");
  expect(Money.franc(1).currency()).toBe("CHF");
});

test("different class equality", () => {
  expect(new Money(5, "CHF").equals(new Franc(5, "CHF"))).toBe(true);
});
