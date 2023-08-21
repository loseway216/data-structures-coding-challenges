class MinHeap {
  // class MinHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }

  insert(value) {
    if (this.elements >= this.heap.length) {
      this.heap.push(value);
      this.elements += 1;
      this.__percolateUp(this.elements - 1);
    } else {
      this.heap[this.elements] = value;
      this.elements += 1;
      this.__percolateUp(this.elements - 1);
    }
  }

  getMin() {
    if (this.elements > 0) {
      return this.heap[0];
    } else {
      return null;
    }
  }

  removeMin() {
    if (this.elements > 1) {
      const min = this.heap[0];
      this.heap[0] = this.heap[this.elements - 1];
      this.elements -= 1;
      this.__minHeapify(0);
      return min;
    } else if ((this.elements = 1)) {
      const min = this.heap[0];
      this.elements -= 1;
      return min;
    } else {
      return null;
    }
  }

  buildHeap(arr) {
    this.heap = arr;
    this.elements = this.heap.length;
    for (var i = this.heap.length - 1; i >= 0; i--) {
      this.__minHeapify(i);
    }
  }

  __percolateUp(index) {
    if (index <= 0) {
      return;
    }
    const parent = Math.floor((index - 1) / 2);
    if (this.heap[parent] > this.heap[index]) {
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;
      this.__percolateUp(parent);
    }
  }

  __minHeapify(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let smallest = index;
    if (this.elements > left && this.heap[smallest] > this.heap[left]) {
      smallest = left;
    }
    if (this.elements > right && this.heap[smallest] > this.heap[right]) {
      smallest = right;
    }
    if (smallest != index) {
      const tmp = this.heap[smallest];
      this.heap[smallest] = this.heap[index];
      this.heap[index] = tmp;
      this.__minHeapify(smallest);
    }
  }

  printHeap() {
    console.log(this.heap);
  }
}

export default MinHeap;
