import Stack from "./Stack";

// Sort Values in Stack
export default function sortStack(stack) {
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();
    while (!tempStack.isEmpty() && tempStack.getTop() > temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return stack;
}
