import findSecondMaximum from "./FindSecondMaximumInArray";

test("Find Second Maximum in Array", () => {
  expect(findSecondMaximum([9, 2, 3, 6])).toBe(6);
  expect(findSecondMaximum([2, 3, 3, 3, 3])).toBe(2);
});
