// Convert Max-Heap to Min-Heap
// Given an array representing a max-heap, convert the array into a min-heap in O(n) time.
export default function convertMax(maxHeap) {
  for (let i = Math.floor(maxHeap.length / 2); i >= 0; i--) {
    minHeapify(maxHeap, i);
  }

  return maxHeap;
}

// implement a minHeapify function
function minHeapify(heap, index) {
  let smallest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  // if left child is smaller than root
  if (left < heap.length && heap[left] < heap[smallest]) {
    smallest = left;
  }

  // if right child is smaller than smallest so far
  if (right < heap.length && heap[right] < heap[smallest]) {
    smallest = right;
  }

  // if smallest is not root
  if (smallest !== index) {
    // swap
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];

    // recursively heapify the affected sub-tree
    minHeapify(heap, smallest);
  }
}
