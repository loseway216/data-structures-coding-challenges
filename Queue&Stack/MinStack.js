// min() Function Using a Stack

import Stack from "./Stack";

export default class minStack {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  push(value) {
    this.stack.push(value);

    if (!this.minStack.isEmpty() && value > this.minStack.getTop()) {
      this.minStack.push(this.minStack.getTop());
    } else {
      this.minStack.push(value);
    }
  }

  min() {
    return this.minStack.getTop();
  }
}
