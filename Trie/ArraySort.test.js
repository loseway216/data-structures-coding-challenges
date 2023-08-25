import sortArray from "./ArraySort";

describe("Array Sort", () => {
  test("sortArray", () => {
    const arr = ["the", "a", "there", "answer", "any", "by", "bye", "their"];
    expect(sortArray(arr)).toEqual([
      "a",
      "answer",
      "any",
      "by",
      "bye",
      "the",
      "their",
      "there",
    ]);
  });
});
