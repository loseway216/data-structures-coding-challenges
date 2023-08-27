import isSubset from "./ArrayIsSubset";

describe("Array is Subset of Another Array", () => {
  test("should return true if arr2 is a subset of arr1", () => {
    expect(isSubset([9, 4, 7, 1, -2, 6, 5], [7, 1, -2])).toBe(true);
  });

  test("should return false if arr2 is not a subset of arr1", () => {
    expect(isSubset([9, 4, 7, 1, -2, 6, 5], [7, 1, -2, 10])).toBe(false);
  });

  test("should return false if arr1 is empty", () => {
    expect(isSubset([], [7, 1, -2, 10])).toBe(false);
  });

  test("should return false if arr2 is empty", () => {
    expect(isSubset([9, 4, 7, 1, -2, 6, 5], [])).toBe(false);
  });
});
