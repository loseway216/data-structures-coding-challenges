import findSubZero from "./FindSubZero";

describe("A Subarray with a Sum of 0", () => {
  test("should return true if a subarray with a sum of 0 exists", () => {
    expect(findSubZero([1, 2, -5, 1, 2, -1])).toBeTruthy();
  });

  test("should return false if a subarray with a sum of 0 does not exist", () => {
    expect(findSubZero([1, 2, 3, 4, 5])).toBeFalsy();
  });
});
