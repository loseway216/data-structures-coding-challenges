import isFormationPossible from "./WordFormation";

describe("Word Formation from a Dictionary Using a Trie", () => {
  test("wordFormation", () => {
    const dictionary = [
      "the",
      "hello",
      "there",
      "answer",
      "any",
      "educative",
      "world",
      "their",
      "abc",
    ];

    expect(isFormationPossible(dictionary, "helloworld")).toBe(true);
    expect(isFormationPossible(dictionary, "zeducative")).toBe(false);
  });
});
