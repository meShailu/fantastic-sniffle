import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

//add

test("adds the numbers  2 , 3 ", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("adds returns a negative value if the greater argument is negative", () => {
  const result1 = add(2, -3);
  expect(result1).toBeLessThan(0);
});

test("adds returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//subtract

test("subtract the numbers  15 , 5 ", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract returns a negative value if the second argument is greater than first argument", () => {
  const result1 = subtract(1, 3);
  expect(result1).toBeLessThan(0);
});

//multiply
test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

//Divide

test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("You should not do this! if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
