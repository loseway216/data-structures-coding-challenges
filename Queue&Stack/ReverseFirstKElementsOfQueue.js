import Stack from "./Stack";

// Reverse First k Elements of Queue
export default function reverseK(queue, k) {
  if (!queue.isEmpty()) {
    const stack = new Stack();

    for (let i = 0; i < k; i++) {
      stack.push(queue.dequeue());
    }

    while (!stack.isEmpty()) {
      queue.enqueue(stack.pop());
    }

    for (let i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
  }

  return queue;
}
