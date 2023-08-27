import isDisjoint from "./ArrayIsDisjoint";

describe("check if arrays are disjointed", () => {
  test("should return true", () => {
    const arr1 = [9, 4, 3, 1, -2, 6, 5];
    const arr2 = [7, 10, 8];
    expect(isDisjoint(arr1, arr2)).toBe(true);
  });

  test("should return false", () => {
    const arr1 = [9, 4, 3, 1, -2, 6, 5];
    const arr2 = [7, 10, 8, 9];
    expect(isDisjoint(arr1, arr2)).toBe(false);
  });
});
