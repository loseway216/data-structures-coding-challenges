import isBalanced from "./CheckBalancedParenthesesUsingStack";

describe("Check Balanced Parentheses Using Stack", () => {
  test("isBalanced", () => {
    expect(isBalanced("((a+b)*x-d)")).toBe(true);
    expect(isBalanced("((a+b]+c)*(d-e)")).toBe(false);
    expect(isBalanced(")(")).toBe(false);
  });
});
