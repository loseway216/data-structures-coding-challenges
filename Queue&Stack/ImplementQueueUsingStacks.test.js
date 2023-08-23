import newQueue from "./ImplementQueueUsingStacks";

test("Implement a Queue Using Stacks", () => {
  var queue = new newQueue();
  for (var i = 0; i < 5; i++) queue.enqueue(i + 1);

  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.dequeue()).toBe(3);
  expect(queue.dequeue()).toBe(4);
  expect(queue.dequeue()).toBe(5);
});
