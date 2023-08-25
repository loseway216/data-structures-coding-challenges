// Count the Number of Edges in an Undirected Graph
export default function numberOfEdges(graph) {
  let result = 0;

  for (let i = 0; i < graph.vertices; i++) {
    let temp = graph.adjacentList[i].getHead();
    while (temp != null) {
      result++;
      temp = temp.next;
    }
  }

  return result / 2;
}
