import maxMin from "./RearrangeSortedArrayMaxMinForm";

test("Rearrange Positive & Negative Values", () => {
  expect(maxMin([1, 2, 3, 4, 5, 6, 7])).toEqual([7, 1, 6, 2, 5, 3, 4]);
  expect(maxMin([1, 2, 3, 4, 5])).toEqual([5, 1, 4, 2, 3]);
});
