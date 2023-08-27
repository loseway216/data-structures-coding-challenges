import tracePath from "./TracePath";

describe("Trace Path in a Grid", () => {
  test("should trace the complete path of a journey", () => {
    expect(
      tracePath([
        ["NewYork", "Chicago"],
        ["Boston", "Texas"],
        ["Missouri", "NewYork"],
        ["Texas", "Missouri"],
      ])
    ).toEqual(["Boston", "Texas", "Missouri", "NewYork", "Chicago"]);
  });
});
