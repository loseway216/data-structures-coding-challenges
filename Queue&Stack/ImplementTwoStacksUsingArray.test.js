import twoStacks from "./ImplementTwoStacksUsingArray";

test("Implement Two Stacks using One Array", () => {
  var stack = new twoStacks(10);
  stack.push1(20);
  stack.push1(30);
  stack.push1(60);

  stack.push2(10);
  stack.push2(40);
  stack.push2(50);

  expect(stack.pop1()).toBe(60);
  expect(stack.pop1()).toBe(30);
  expect(stack.pop1()).toBe(20);

  expect(stack.pop2()).toBe(50);
  expect(stack.pop2()).toBe(40);
  expect(stack.pop2()).toBe(10);
});
