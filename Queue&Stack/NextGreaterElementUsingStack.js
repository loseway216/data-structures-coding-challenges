import Stack from "./Stack";

// Next Greater Element Using a Stack
export default function nextGreaterElement(arr) {
  const stack = new Stack();
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.isEmpty()) {
      result.push(-1);
    } else if (stack.getTop() > arr[i]) {
      result.push(stack.getTop());
    } else if (stack.getTop() <= arr[i]) {
      while (!stack.isEmpty() && stack.getTop() <= arr[i]) {
        stack.pop();
      }
      if (stack.isEmpty()) {
        result.push(-1);
      } else {
        result.push(stack.getTop());
      }
    }
    stack.push(arr[i]);
  }

  return result.reverse();
}
