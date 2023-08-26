import findKSmallest from "./FindKSmallest";

describe("Find k Smallest Elements in an Array", () => {
  test("should return the k smallest elements in an array", () => {
    expect(findKSmallest([1, 5, 4, 10, 50, 9, 7], 3)).toEqual([1, 4, 5]);
  });
});
