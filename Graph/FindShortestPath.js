import Queue from "../Queue&Stack/Queue";

// Find the Shortest Path Between Two Vertices
export default function findShortestPath(graph, source, destination) {
  const queue = new Queue();
  const visited = new Array(graph.vertices).fill(false);
  const distance = new Array(graph.vertices).fill(-1);

  queue.enqueue(source);
  visited[source] = true;
  distance[source] = 0;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    const list = graph.adjacentList[current];

    let startNode = list.getHead();
    while (startNode != null) {
      const data = startNode.data;
      if (!visited[data]) {
        queue.enqueue(data);
        visited[data] = true;
        distance[data] = distance[current] + 1;
      }
      startNode = startNode.next;
    }
  }

  return distance[destination];
}
