import totalWords from "./TotalWords";
import Trie from "./Trie";

describe("Total Words", () => {
  test("totalWords", () => {
    const trie = new Trie();
    trie.insert("the");
    trie.insert("a");
    trie.insert("there");
    trie.insert("answer");
    trie.insert("any");
    trie.insert("by");
    trie.insert("bye");
    trie.insert("their");
    expect(totalWords(trie.root)).toBe(8);
  });
});
