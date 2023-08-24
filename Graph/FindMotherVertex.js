// Find a "Mother Vertex" in a Graph (can reach to any other vertex)
export default function findMotherVertex(g) {
  const visited = new Array(g.vertices).fill(false);
  let lastVisited = 0;

  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      dfs(g, i, visited);
      lastVisited = i;
    }
  }

  visited.fill(false);
  dfs(g, lastVisited, visited);

  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      return -1;
    }
  }

  return lastVisited;
}

function dfs(g, source, visited) {
  visited[source] = true;

  let start = g.adjacentList[source].getHead();

  while (start) {
    if (!visited[start.data]) {
      dfs(g, start.data, visited);
    }
    start = start.next;
  }
}
