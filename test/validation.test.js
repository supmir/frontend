const {
  isNotEmpty,
  getYearDifference,
  isWithinRange,
  isAnEmail,
} = require("../utils/validation");

test("checks if string is empty", () => {
  expect(isNotEmpty()).toBe(false);
  expect(isNotEmpty("")).toBe(false);
  expect(isNotEmpty("test")).toBe(true);
});

test("returns year difference", () => {
  expect(getYearDifference(new Date(1999, 1, 1), new Date(2000, 1, 1))).toBe(1);
  expect(getYearDifference(new Date(1980, 1, 1), new Date(2000, 1, 1))).toBe(
    20
  );
});
test("Checks if number is within range", () => {
  expect(isWithinRange(0, 1, 3)).toBe(false);
  expect(isWithinRange(2, 1, 3)).toBe(true);
  expect(isWithinRange(2, undefined, undefined)).toBe(false);
});
test("Checks if string is an email address", () => {
  expect(isAnEmail()).toBe(false);
  expect(isAnEmail("")).toBe(false);
  expect(isAnEmail(0)).toBe(false);
  expect(isAnEmail("iskandar.amir@gmail.12")).toBe(false);
  expect(isAnEmail("iskandar.amir@gmail.com")).toBe(true);
});
