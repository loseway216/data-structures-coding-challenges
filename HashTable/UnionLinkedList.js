import LinkedList from "../LinkedList/SinglyLinkedList";

// Union of Linked Lists
export default function unionList(list1, list2) {
  const map = {};
  let current = list1.getHead();

  while (current) {
    map[current.data] = true;
    current = current.next;
  }

  current = list2.getHead();

  while (current) {
    if (map[current.data] == null) {
      map[current.data] = true;
    }
    current = current.next;
  }

  const result = new LinkedList();
  Object.keys(map).forEach((key) => result.insertAtHead(key));
  return result;
}
