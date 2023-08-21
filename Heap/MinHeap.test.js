import MinHeap from "./MinHeap";

test("MinHeap", () => {
  const heap = new MinHeap();
  heap.insert(12);
  heap.insert(10);
  heap.insert(-10);
  heap.insert(100);

  expect(heap.getMin()).toBe(-10);

  const newHeap = new MinHeap();
  const arr = [6, 9, 3, 4, 13, 22, 1, 30, 17];
  newHeap.buildHeap(arr);

  expect(newHeap.getMin()).toBe(1);
  newHeap.removeMin();
  expect(newHeap.getMin()).toBe(3);
});
