import { sum, substract, multifly, divide } from "../myFunctions/do-some-math";
describe("Math functions test", () => {
  it("두 가지 값을 더합니다", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
  it("두 가지 값을 뺍니다.", () => {
    expect(substract(1, 1)).toBe(0);
  });
  it("두 가지 값을 곱합니다.", () => {
    expect(multifly(2, 2)).toBe(4);
  });
  it("두 가지 값을 나눕니다.", () => {
    expect(divide(4, 2)).toBe(2);
  });
});
