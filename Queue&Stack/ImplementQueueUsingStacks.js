import Stack from "./Stack";
// Implement a Queue Using Stacks

// Optimizing both enqueue and dequeue
export default class newQueue {
  constructor() {
    this.mainStack = new Stack();
    this.tempStack = new Stack();
  }

  enqueue(value) {
    while (!this.mainStack.isEmpty()) {
      this.tempStack.push(this.mainStack.pop());
    }
    this.tempStack.push(value);
  }

  dequeue() {
    while (!this.tempStack.isEmpty()) {
      this.mainStack.push(this.tempStack.pop());
    }
    return this.mainStack.pop();
  }
}

// Optimizing dequeue
class newQueue2 {
  constructor(mySize) {
    this.tempStack = new Stack();
    this.mainStack = new Stack();
  }
  enqueue(value) {
    //Traverse elements from mainStack to tempStack
    //Push given value to mainStack
    //Traverse back the elements from tempStack to mainStack
    while (this.mainStack.isEmpty() == false) {
      this.tempStack.push(this.mainStack.pop());
    }

    this.tempStack.push(value);
    while (this.tempStack.isEmpty() == false) {
      this.mainStack.push(this.tempStack.pop());
    }
  }

  dequeue() {
    if (this.mainStack.isEmpty() == false) {
      return this.mainStack.pop();
    }
  }
}

// Optimizing enqueue
class newQueue3 {
  constructor(mySize) {
    this.tempStack = new Stack();
    this.mainStack = new Stack();
  }
  enqueue(value) {
    this.mainStack.push(value);
  }

  dequeue() {
    //If mainStack is empty then we have no elements.
    if (this.mainStack.isEmpty()) return null;
    //else pop all values from the mainStack
    //to the tempStack so that we have the
    //oldest on top
    while (this.mainStack.isEmpty() == false) {
      this.tempStack.push(this.mainStack.pop());
    }

    //pop the oldest value
    var temp = this.tempStack.pop();
    //push all the values again into the mainStack
    while (this.tempStack.isEmpty() == false) {
      this.mainStack.push(this.tempStack.pop());
    }

    return temp;
  }
}
