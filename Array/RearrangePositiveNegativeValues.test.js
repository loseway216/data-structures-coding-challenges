import reArrange from "./RearrangePositiveNegativeValues";

test("Rearrange Positive & Negative Values", () => {
  expect(reArrange([-1, 5, -4, -3])).toEqual([-1, -4, -3, 5]);
  expect(reArrange([300, -1, 3, 0])).toEqual([-1, 300, 3, 0]);
  expect(reArrange([0, 0, 0, -2])).toEqual([-2, 0, 0, 0]);
});
