import findMid from "./FindMiddleNodeOfLinkedList";
import LinkedList from "./SinglyLinkedList";

test("Find Middle Node of a Linked List", () => {
  const list = new LinkedList();
  list.insertAtHead(21);
  list.insertAtHead(14);
  list.insertAtHead(11);
  list.insertAtHead(7);

  expect(findMid(list).data).toBe(11);
});
