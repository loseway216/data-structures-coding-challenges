import MinHeap from "./MinHeap.js";
// Find k Smallest Elements in an Array
export default function findKSmallest(arr, k) {
  const kSmallest = [];
  if (k > arr.length) {
    k = arr.length;
  }
  const heap = new MinHeap();
  heap.buildHeap(arr);

  for (let i = 0; i < k; i++) {
    kSmallest.push(heap.removeMin());
  }
  return kSmallest;
}
