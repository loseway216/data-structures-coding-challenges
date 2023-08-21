import mergeArrays from "./MergeTwoSortedArrays";

test("Merge Two Sorted Arrays", () => {
  expect(mergeArrays(null, null)).toEqual([]);
  expect(mergeArrays([], [])).toEqual([]);
  expect(mergeArrays([], [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(mergeArrays([1, 3, 4, 5], [2, 6, 7, 8])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});
