// Remove Edge
export default function removeEdge(graph, source, destination) {
  // edge case
  if (source >= graph.vertices || destination >= graph.vertices) {
    return graph;
  }

  if (graph.adjacentList.length === 0) {
    return graph;
  }

  graph.adjacentList[source].deleteVal(destination);
  graph.adjacentList[destination].deleteVal(source);

  return graph;
}
