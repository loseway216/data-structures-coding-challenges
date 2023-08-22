import findMaxSumSubArray from "./MaximumSumSubArray";

test("Maximum Sum Subarray", () => {
  expect(findMaxSumSubArray([1, 10, -1, 11, 5, -30, -7, 20, 25, -35])).toBe(45);
  expect(findMaxSumSubArray([-15, -14, -10, -19, -5, -21, -10])).toBe(-5);
});
