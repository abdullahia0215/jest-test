const isLeapYear = require("../js-functions/leapyear");

test("Year 2000 is a leap year", () => {
  expect(isLeapYear(2000)).toBe(true);
});

test("Year 1900 is not a leap year", () => {
  expect(isLeapYear(1900)).toBe(false);
});

test("Year 2004 is a leap year", () => {
  expect(isLeapYear(2004)).toBe(true);
});

test("Year 2001 is not a leap year", () => {
  expect(isLeapYear(2001)).toBe(false);
});
