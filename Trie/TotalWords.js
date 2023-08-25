// Total Number of Words in a Trie
export default function totalWords(root) {
  let total = 0;

  if (root.isEndWord) {
    total += 1;
  }

  for (let i = 0; i < 26; i++) {
    if (root.children[i]) {
      total += totalWords(root.children[i]);
    }
  }

  return total;
}
