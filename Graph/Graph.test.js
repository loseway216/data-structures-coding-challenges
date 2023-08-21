import Graph from "./Graph";

describe("Graph", () => {
  let g;

  beforeEach(() => {
    g = new Graph(6);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 5);
  });

  test("bfs traversal", () => {
    expect(g.bfsTraversal(0)).toBe("021543");
  });

  test("dfs traversal", () => {
    expect(g.dfsTraversal(0)).toBe("013425");
  });
});
