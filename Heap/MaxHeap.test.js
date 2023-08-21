import MaxHeap from "./MaxHeap";

test("MaxHeap", () => {
  const heap = new MaxHeap();
  const arr = [6, 9, 3, 4, 13, 22, 1, 30, 17];
  heap.buildHeap(arr);
  expect(heap.getMax()).toBe(30);
  expect(heap.removeMax()).toBe(30);
  expect(heap.removeMax()).toBe(22);
});
