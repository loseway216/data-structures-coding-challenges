import Trie from "./Trie";

test("Trie", () => {
  // Input keys (use only 'a' through 'z' and lower case)
  let keys = [
    "the",
    "a",
    "there",
    "answer",
    "any",
    "by",
    "bye",
    "their",
    "abc",
  ];
  let t = new Trie();
  //Construct Trie
  for (var i = 0; i < keys.length; i++) {
    t.insert(keys[i]);
  }

  //Search for different keys
  expect(t.search("the")).toBe(true);
  expect(t.search("these")).toBe(false);
  expect(t.search("abc")).toBe(true);

  t.delete("there");
  expect(t.search("there")).toBe(false);
});
