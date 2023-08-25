// Find Nodes at "k" Distance From the Root
export default function findKNodes(root, k) {
  const array = [];
  findKNodesHelper(root, k, array);
  return array;
}

function findKNodesHelper(root, k, array) {
  if (root === null) {
    return;
  }

  if (k === 0) {
    array.push(root.value);
    return;
  }

  findKNodesHelper(root.leftChild, k - 1, array);
  findKNodesHelper(root.rightChild, k - 1, array);
}
