// Find All Words Stored in Trie
export default function findAllWords(root) {
  const result = [];
  findAllWordsHelper(root, "", result);
  return result;
}

function findAllWordsHelper(root, str, result) {
  if (root.isEndWord) {
    result.push(str);
  }

  for (let i = 0; i < 26; i++) {
    if (root.children[i]) {
      findAllWordsHelper(
        root.children[i],
        str + String.fromCharCode(97 + i),
        result
      );
    }
  }
}
