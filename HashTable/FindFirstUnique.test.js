import findFirstUnique from "./FindFirstUnique";

describe("find first unique", () => {
  test("should return the first unique element in an array", () => {
    expect(findFirstUnique([9, 2, 3, 2, 6, 6])).toEqual(9);
    expect(findFirstUnique([4, 5, 1, 2, 0, 4])).toEqual(5);
    expect(findFirstUnique([4, 4, 4, 4, 5])).toEqual(5);
    expect(findFirstUnique([4, 4, 4, 4, 3])).toEqual(3);
  });
});
