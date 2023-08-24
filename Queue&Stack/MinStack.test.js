import minStack from "./MinStack";

describe("Min Stack", () => {
  test("minStack", () => {
    const stack = new minStack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.push(5);
    stack.push(4);

    // expect stack top to be minimum value
    expect(stack.min()).toBe(1);
  });
});
