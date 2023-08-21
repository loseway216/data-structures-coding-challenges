import Queue from "./Queue";

test("Queue", () => {
  const q = new Queue(3);

  q.enqueue(5);
  q.enqueue(1);
  q.enqueue(9);

  expect(q.getFront()).toBe(5);
  expect(q.getTail()).toBe(9);

  expect(q.dequeue()).toBe(5);
  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(9);
});
