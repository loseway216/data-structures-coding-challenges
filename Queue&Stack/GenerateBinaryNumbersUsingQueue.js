import Queue from "./Queue";

// Generate Binary Numbers From 1 to n Using Queue
export default function generateBinary(n) {
  if (n < 1) {
    return [];
  }

  const queue = new Queue();
  const result = [];

  queue.enqueue(1);

  for (let i = 0; i < n; i++) {
    const front = queue.dequeue();
    result.push(front);

    queue.enqueue(parseInt(front + "0"));
    queue.enqueue(parseInt(front + "1"));
  }

  return result;
}
