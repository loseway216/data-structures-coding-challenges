import findKLargest from "./FindKLargest";

describe("Find k Largest Elements in an Array", () => {
  test("should return the k largest elements in an array", () => {
    expect(findKLargest([1, 5, 4, 10, 50, 9, 7], 4)).toEqual([50, 10, 9, 7]);
  });
});
