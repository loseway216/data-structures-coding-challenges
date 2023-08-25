import Trie from "./Trie";

// Array Sort Using Tries
export default function sortArray(arr) {
  const trie = new Trie();
  for (let i = 0; i < arr.length; i++) {
    trie.insert(arr[i]);
  }

  const result = [];
  sortArrayHelper(trie.root, "", result);
  return result;
}

function sortArrayHelper(root, str, result) {
  if (root.isEndWord) {
    result.push(str);
  }

  for (let i = 0; i < 26; i++) {
    if (root.children[i]) {
      sortArrayHelper(
        root.children[i],
        str + String.fromCharCode(97 + i),
        result
      );
    }
  }
}
