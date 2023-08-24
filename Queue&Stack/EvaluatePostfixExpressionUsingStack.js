import Stack from "./Stack";

// Evaluate Postfix Expression Using a Stack
export default function evaluatePostfix(exp) {
  const stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    if (!isNaN(parseInt(exp[i], 10))) {
      stack.push(parseInt(exp[i], 10));
    } else {
      const op1 = stack.pop();
      const op2 = stack.pop();
      if (exp[i] == "+") {
        stack.push(op1 + op2);
      } else if (exp[i] == "-") {
        stack.push(op2 - op1);
      } else if (exp[i] == "*") {
        stack.push(op1 * op2);
      } else if (exp[i] == "/") {
        stack.push(op2 / op1);
      }
    }
  }
  return stack.pop();
}
