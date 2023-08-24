// Check Balanced Parentheses Using Stack

import Stack from "./Stack";

export default function isBalanced(exp) {
  const stack = new Stack();

  for (let i = 0; i < exp.length; i++) {
    const val = exp[i];

    if (val == ")" || val == "]" || val == "}") {
      if (stack.isEmpty()) {
        return false;
      }
      const top = stack.pop();
      if (val == ")" && top != "(") {
        return false;
      }
      if (val == "]" && top != "[") {
        return false;
      }
      if (val == "}" && top != "{") {
        return false;
      }
    } else if (val == "(" || val == "[" || val == "{") {
      stack.push(val);
    }
  }

  if (!stack.isEmpty()) {
    return false;
  }

  return true;
}
