import evaluatePostfix from "./EvaluatePostfixExpressionUsingStack";

describe("Evaluate Postfix Expression Using Stack", () => {
  test("evaluatePostfix", () => {
    expect(evaluatePostfix("921*-8-4+")).toBe(3);
    expect(evaluatePostfix("123+*8-")).toBe(-3);
  });
});
