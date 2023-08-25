// Check if an Undirected Graph is Tree or not
export default function isTree(graph) {
  const visited = new Array(graph.vertices).fill(false);
  if (dfs(graph, 0, visited, -1)) {
    return false;
  }
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited[i]) {
      return false;
    }
  }
  return true;
}

function dfs(graph, source, visited, parent) {
  visited[source] = true;

  let start = graph.adjacentList[source].getHead();

  while (start) {
    if (!visited[start.data]) {
      if (dfs(graph, start.data, visited, source)) {
        return true;
      }
    } else if (start.data != parent) {
      return true;
    }
    start = start.next;
  }
  return false;
}
