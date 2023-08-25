// Detect Cycle in Graph
export default function detectCycle(graph) {
  const visited = new Array(graph.vertices).fill(false);
  const recursionStack = new Array(graph.vertices).fill(false);

  for (let i = 0; i < graph.vertices; i++) {
    if (dfs(graph, i, visited, recursionStack)) {
      return true;
    }
  }

  return false;
}

function dfs(graph, source, visited, recursionStack) {
  if (recursionStack[source]) {
    return true;
  }

  if (visited[source]) {
    return false;
  }

  visited[source] = true;
  recursionStack[source] = true;

  let start = graph.adjacentList[source].getHead();

  while (start) {
    if (dfs(graph, start.data, visited, recursionStack)) {
      return true;
    }
    start = start.next;
  }

  recursionStack[source] = false;

  return false;
}
