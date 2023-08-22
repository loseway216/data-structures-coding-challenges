// Reverse a Linked List
export default function reverseLinkedList(list) {
  if (list.isEmpty()) {
    return null;
  }

  let currentNode = list.getHead();
  let previous = null;
  let next = null;

  while (currentNode != null) {
    next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = next;
  }

  list.setHead(previous);

  return list;
}
