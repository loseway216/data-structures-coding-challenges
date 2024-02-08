class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// while(cur) 想遍历到每个node
// while(cur.next) 在最后一个node停住
// while(cur.next && cur.next.next) 在倒数第二个node停住

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return this;
    }
    this.head = this.head.next;
    return this;
  }

  insertAtTail(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;

    return this;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }

    let currentNode = this.head;

    if (currentNode.next === null) {
      this.head = null;
      return this;
    }

    while (currentNode.next !== null && currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;

    return this;
  }

  deleteVal(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;

    if (currentNode.data === value) {
      this.head = currentNode.next;
      return true;
    }

    while (currentNode.next !== null) {
      if (currentNode.next.data === value) {
        currentNode.next = currentNode.next.next;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  search(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  isEmpty() {
    return this.head === null;
  }

  getHead() {
    return this.head;
  }

  setHead(newHead) {
    this.head = newHead;
    return this;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp !== null) {
        console.log(String(temp.data));
        console.log(" -> ");
        temp = temp.next;
      }
      console.log("null");
      return true;
    }
  }

  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head;
      while (temp !== null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.next;
      }
      st += "null";
      return st;
    }
  }
}

export default LinkedList;
