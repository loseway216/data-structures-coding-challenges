import DoublyLinkedList from "../LinkedList/DoublyLinkedList";

class Queue {
  constructor(size) {
    this.size = size;
    this.items = new DoublyLinkedList();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.items.getHead();
    } else {
      return null;
    }
  }

  getTail() {
    if (!this.isEmpty()) {
      return this.items.getTail();
    } else {
      return null;
    }
  }

  enqueue(value) {
    this.items.insertAtTail(value);
  }

  dequeue() {
    return this.items.deleteAtHead();
  }
}

export default Queue;
