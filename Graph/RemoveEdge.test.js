import Graph from "./Graph";
import removeEdge from "./RemoveEdge";

describe("Remove Edge", () => {
  test("removeEdge", () => {
    const graph = new Graph(4);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(3, 0);
    graph.addEdge(3, 1);

    const graph2 = new Graph(4);
    graph2.addEdge(0, 1);
    graph2.addEdge(1, 2);
    graph2.addEdge(3, 0);

    expect(removeEdge(graph, 3, 1)).toEqual(graph2);
  });
});
