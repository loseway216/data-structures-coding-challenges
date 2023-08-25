// Find Ancestors of a Given Node in a BST
export default function findAncestors(root, k) {
  const array = [];
  findAncestorsHelper(root, k, array);
  return array;
}

function findAncestorsHelper(node, k, array) {
  if (node === null) {
    return false;
  }

  if (node.value === k) {
    return true;
  }

  if (
    findAncestorsHelper(node.leftChild, k, array) ||
    findAncestorsHelper(node.rightChild, k, array)
  ) {
    array.push(node.value);
    return true;
  }

  return false;
}
