import findShortestPath from "./FindShortestPath";
import Graph from "./Graph";

describe("Find the Shortest Path Between Two Vertices", () => {
  test("findShortestPath", () => {
    const graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 3);

    expect(findShortestPath(graph, 0, 2)).toBe(2);
    expect(findShortestPath(graph, 0, 3)).toBe(-1);
  });
});
