import findNth from "./ReturnNthNodeFromEnd";
import LinkedList from "./SinglyLinkedList";

test("Return the Nth Node from the End", () => {
  const list = new LinkedList();
  list.insertAtHead(54);
  list.insertAtHead(89);
  list.insertAtHead(11);
  list.insertAtHead(40);
  list.insertAtHead(23);

  expect(findNth(list, 2).data).toBe(89);
  expect(findNth(list, 100)).toBe(null);
});
