import findPair from "./FindPair";

describe("Find Two Pairs Such That a+b = c+d", () => {
  test("should return two pairs", () => {
    expect(findPair([3, 4, 7, 1, 12, 9], 10)).toEqual([
      [4, 12],
      [7, 9],
    ]);
  });
});
