// Find the Length of a Linked List
export default function lengthOfLinkedList(list) {
  if (!list || list.isEmpty()) {
    return 0;
  }

  let length = 0;
  let currentNode = list.getHead();

  while (currentNode != null) {
    currentNode = currentNode.next;
    length++;
  }
  return length;
}
