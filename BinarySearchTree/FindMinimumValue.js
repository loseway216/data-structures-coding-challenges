// Find the Minimum Value in a Binary Search Tree
export default function findMinimumValue(root) {
  if (!root) {
    return null;
  }

  let current = root;
  while (current.leftChild) {
    current = current.leftChild;
  }

  return current.value;
}
