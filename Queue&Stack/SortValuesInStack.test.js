import sortStack from "./SortValuesInStack";
import Stack from "./Stack";

describe("Sort Values in Stack", () => {
  test("sortStack", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.push(5);
    stack.push(4);

    // expect stack top to be minimum value
    expect(sortStack(stack).getTop()).toBe(1);
  });
});
