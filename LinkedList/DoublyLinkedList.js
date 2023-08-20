class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null;
  }

  getHead() {
    return this.head;
  }

  //Insertion At Head
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    if (this.isEmpty()) {
      this.tail = tempNode;
      this.head = tempNode;
      return this;
    }
    this.head.previousElement = tempNode;
    this.head = tempNode;
    return this; //returning the updated list
  }

  insertAtTail(newData) {
    let tempNode = new Node(newData);
    tempNode.previousElement = this.tail;
    if (this.isEmpty()) {
      this.head = tempNode;
      this.tail = tempNode;
      return this;
    }
    this.tail.nextElement = tempNode;
    this.tail = tempNode;
    return this; //returning the updated list
  }

  search(value) {
    //Start from the first element
    let currentNode = this.head;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; //value found
      }
      currentNode = currentNode.nextElement;
    }
    return false; //value not found
  }

  deleteAtHead() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;

    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;
    if (this.head == null) {
      this.tail = null;
      return this;
    }
    this.head.previousElement = null;
    return this;
  }

  deleteAtTail() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let lastElement = this.tail;
    //If list is not empty, link head to the nextElement of firstElement
    this.tail = lastElement.previousElement;
    if (this.tail == null) {
      this.head = null;
      return this;
    }
    this.tail.nextElement = null;
    return this;
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        console.log(String(temp.data));
        console.log(" <-> ");
        temp = temp.nextElement;
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
      while (temp != null) {
        st += String(temp.data);
        st += " <-> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }
}
