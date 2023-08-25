import checkPath from "./CheckPathBetweenTwoVertices";
import Graph from "./Graph";

describe("Check Path Between Two Vertices", () => {
  test("checkPath", () => {
    const graph = new Graph(4);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(3, 0);
    graph.addEdge(3, 1);

    expect(checkPath(graph, 3, 1)).toBe(true);
    expect(checkPath(graph, 0, 3)).toBe(false);
  });
});
