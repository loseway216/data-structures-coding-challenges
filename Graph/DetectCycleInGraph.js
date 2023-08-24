// Detect Cycle in Graph
export default function detectCycle(g) {
  const visited = new Array(g.vertices).fill(false);
  const recursionStack = new Array(g.vertices).fill(false);

  for (let i = 0; i < g.vertices; i++) {
    if (detectRecursive(g, i, visited, recursionStack)) {
      return true;
    }
  }

  return false;
}

function detectRecursive(g, source, visited, recursionStack) {
  if (recursionStack[source]) {
    return true;
  }
  if (visited[source]) {
    return false;
  }
  visited[source] = true;
  recursionStack[source] = true;

  let start = g.adjacentList[source].getHead();

  while (start) {
    if (detectRecursive(g, start.data, visited, recursionStack)) {
      return true;
    }
    start = start.next;
  }

  recursionStack[source] = false;

  return false;
}
