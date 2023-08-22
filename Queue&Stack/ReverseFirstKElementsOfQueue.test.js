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

  expect(reverseK(queue, 5)).toEqual([5, 4, 3, 2, 1, 6, 7, 8, 9, 10]);
});
