import Queue from "../Queue&Stack/Queue";
// Check if a Path Exists Between Two Vertices
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
export default function checkPath(graph, source, destination) {
  if (source === destination) {
    return true;
  }

  const visited = new Array(graph.vertices).fill(false);
  const queue = new Queue();

  queue.enqueue(source);
  visited[source] = true;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    const list = graph.adjacentList[current];

    let startNode = list.getHead();
    while (startNode != null) {
      const data = startNode.data;
      if (data === destination) {
        return true;
      }
      if (!visited[data]) {
        queue.enqueue(data);
        visited[data] = true;
      }
      startNode = startNode.next;
    }
  }

  return false;
}
