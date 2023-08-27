import findSymmetric from "./FindSymmetric";

describe("Find Symmetric Pairs in an Array", () => {
  test("should return symmetric pairs", () => {
    expect(
      findSymmetric([
        [1, 2],
        [3, 4],
        [5, 9],
        [4, 3],
        [9, 5],
        [10, 11],
        [11, 10],
      ])
    ).toEqual([
      [3, 4],
      [5, 9],
      [10, 11],
    ]);
  });
});
