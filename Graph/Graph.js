import LinkedList from "../LinkedList/SinglyLinkedList";
import Queue from "../Queue/Queue";
import Stack from "../Stack/Stack";

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacentList = [];

    for (let i = 0; i < vertices; i++) {
      this.adjacentList.push(new LinkedList());
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices) {
      this.adjacentList[source].insertAtHead(destination);
    }
    return this;
  }

  bfsTraversal(source) {
    let result = "";
    const queue = new Queue();
    const visited = new Array(this.vertices).fill(false);

    queue.enqueue(source);
    visited[source] = true;

    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      result += current;
      const list = this.adjacentList[current];

      let startNode = list.getHead();
      while (startNode != null) {
        const data = startNode.data;
        if (!visited[data]) {
          queue.enqueue(data);
          visited[data] = true;
        }
        startNode = startNode.next;
      }
    }

    return result;
  }

  dfsTraversal(source) {
    let result = "";
    const stack = new Stack();
    const visited = new Array(this.vertices).fill(false);

    stack.push(source);
    visited[source] = true;

    while (!stack.isEmpty()) {
      const current = stack.pop();
      result += current;
      const list = this.adjacentList[current];

      let startNode = list.getHead();
      while (startNode != null) {
        const data = startNode.data;
        if (!visited[data]) {
          stack.push(data);
          visited[data] = true;
        }
        startNode = startNode.next;
      }
    }

    return result;
  }

  printGraph() {
    console.log(">>Adjacency List of Directed Graph<<");
    var i;
    for (i = 0; i < this.adjacentList.length; i++) {
      console.log("|" + String(i) + "| => ");
      let temp = this.adjacentList[i].getHead();
      while (temp != null) {
        console.log("[" + String(temp.data) + "] -> ");
        temp = temp.next;
      }
      console.log("null ");
    }
  }
}

export default Graph;
