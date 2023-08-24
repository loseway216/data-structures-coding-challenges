import nextGreaterElement from "./NextGreaterElementUsingStack";

describe("Next Greater Element Using Stack", () => {
  test("nextGreaterElement", () => {
    expect(nextGreaterElement([4, 6, 3, 2, 8, 1])).toEqual([
      6, 8, 8, 8, -1, -1,
    ]);
    expect(nextGreaterElement([4, 8, 2, 1])).toEqual([8, -1, -1, -1]);
  });
});
