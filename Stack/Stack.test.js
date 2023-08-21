import Stack from "./Stack";

test("Stack", () => {
  const stack = new Stack(3);

  stack.push(5);
  stack.push(1);
  stack.push(9);

  expect(stack.getTop()).toBe(9);
  expect(stack.pop()).toBe(9);
  expect(stack.pop()).toBe(1);
  expect(stack.pop()).toBe(5);
});
