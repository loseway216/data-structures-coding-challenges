import MaxHeap from "./MaxHeap";

// Find k Largest Elements in an Array
export default function findKLargest(arr, k) {
  const kLargest = [];
  if (k > arr.length) {
    k = arr.length;
  }
  const heap = new MaxHeap();
  heap.buildHeap(arr);

  for (let i = 0; i < k; i++) {
    kLargest.push(heap.removeMax());
  }
  return kLargest;
}
