import Queue from "./Queue";
import reverseK from "./ReverseFirstKElementsOfQueue";

test("Reverse First k Elements of Queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
  queue.enqueue(9);
  queue.enqueue(10);

  const q2 = new Queue();
  q2.enqueue(5);
  q2.enqueue(4);
  q2.enqueue(3);
  q2.enqueue(2);
  q2.enqueue(1);
  q2.enqueue(6);
  q2.enqueue(7);
  q2.enqueue(8);
  q2.enqueue(9);
  q2.enqueue(10);

  reverseK(queue, 5);
  expect(queue.toString()).toBe(q2.toString());
});
