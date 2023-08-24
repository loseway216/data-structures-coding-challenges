import findMotherVertex from "./FindMotherVertex";
import Graph from "./Graph";

describe("Find Mother Vertex", () => {
  test("findMotherVertex", () => {
    const graph = new Graph(4);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(3, 0);
    graph.addEdge(3, 1);

    expect(findMotherVertex(graph)).toBe(3);
  });
});
