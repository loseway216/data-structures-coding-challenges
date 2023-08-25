// Find the Height of a BST
export default function findHeight(root) {
  if (root === null) {
    return -1;
  }

  return Math.max(findHeight(root.leftChild), findHeight(root.rightChild)) + 1;
}
