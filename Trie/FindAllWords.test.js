import findAllWords from "./FindAllWords";
import Trie from "./Trie";

describe("Find All Words", () => {
  test("findAllWords", () => {
    const trie = new Trie();
    trie.insert("the");
    trie.insert("a");
    trie.insert("there");
    trie.insert("answer");
    trie.insert("any");
    trie.insert("by");
    trie.insert("bye");
    trie.insert("their");

    expect(findAllWords(trie.root)).toEqual([
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
