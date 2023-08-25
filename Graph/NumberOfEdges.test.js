import Graph from "./Graph";
import numberOfEdges from "./NumberOfEdges";

describe("Count the Number of Edges in an Undirected Graph", () => {
  test("NumberOfEdges", () => {
    const graph = new Graph(6, false);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 3);

    expect(numberOfEdges(graph)).toBe(5);
  });
});
