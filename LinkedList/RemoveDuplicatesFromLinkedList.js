// Remove Duplicates from Linked List
export default function removeDuplicates(list) {
  if (list.isEmpty()) {
    return list;
  }

  const map = {};

  let currentNode = list.getHead();

  map[currentNode.data] = 1;

  while (currentNode.next != null) {
    if (map[currentNode.next.data]) {
      currentNode.next = currentNode.next.next;
    } else {
      map[currentNode.next.data] = 1;
      currentNode = currentNode.next;
    }
  }

  return list;
}
