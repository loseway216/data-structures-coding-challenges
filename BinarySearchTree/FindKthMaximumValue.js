// Find the kth Maximum Value in a Binary Search Tree
// use in-order traversal to get the kth maximum value
export default function findKthMaximumValue(root, k) {
  const array = [];
  inOrderTraversal(root, array);
  const index = array.length - k;
  if (index < 0) {
    return null;
  }
  return array[index];
}

function inOrderTraversal(node, array) {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.leftChild, array);
  array.push(node.value);
  inOrderTraversal(node.rightChild, array);
}
