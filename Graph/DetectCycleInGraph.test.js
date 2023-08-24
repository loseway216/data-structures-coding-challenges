import detectCycle from "./DetectCycleInGraph";
import Graph from "./Graph";

describe("Detect Cycle in Graph", () => {
  test("detectCycle", () => {
    const graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 3);

    expect(detectCycle(graph)).toBe(true);
  });
});
