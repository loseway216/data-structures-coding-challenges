import removeDuplicates from "./RemoveDuplicatesFromLinkedList";
import LinkedList from "./SinglyLinkedList";

// Union & Intersection of Linked Lists
function union(list1, list2) {
  if (list1.isEmpty()) {
    return list2;
  } else if (list2.isEmpty()) {
    return list1;
  }

  let currentNode = list1.getHead();
  while (currentNode.next != null) {
    currentNode = currentNode.next;
  }

  currentNode.next = list2.getHead();

  return removeDuplicates(list1);
}

function intersection(list1, list2) {
  const list = new LinkedList();

  let node1 = list1.getHead();
  let node2 = list2.getHead();

  while (node1 != null) {
    while (node2 != null) {
      if (node1.data == node2.data) {
        list.insertAtTail(node1.data);
      }
      node2 = node2.next;
    }
    node2 = list2.getHead();
    node1 = node1.next;
  }

  return removeDuplicates(list);
}

export { intersection, union };
