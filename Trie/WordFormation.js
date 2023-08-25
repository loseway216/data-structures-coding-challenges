import Trie from "./Trie";

// Word Formation from a Dictionary Using a Trie
// determine whether a given word can be formed by combining two words from a given dictionary.
export default function isFormationPossible(dict, word) {
  const trie = new Trie();
  for (let i = 0; i < dict.length; i++) {
    trie.insert(dict[i], i);
  }

  let currentNode = trie.root;
  for (let i = 0; i < word.length; i++) {
    const index = trie.getIndex(word[i]);
    if (currentNode.children[index] == null) {
      return false;
    } else if (
      currentNode.children[index].isEndWord &&
      trie.search(word.substring(i + 1))
    ) {
      return true;
    }
    currentNode = currentNode.children[index];
  }
  return false;
}
