import isTree from "./CheckGraphIsTree";
import Graph from "./Graph";

describe("Check Graph is Tree", () => {
  test("isTree", () => {
    const graph = new Graph(6, false);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 3);

    expect(isTree(graph)).toBe(false);

    const g1 = new Graph(5, false);
    g1.addEdge(0, 1);
    g1.addEdge(0, 2);
    g1.addEdge(1, 4);
    g1.addEdge(2, 3);
    expect(isTree(g1)).toBe(true);
  });
});
