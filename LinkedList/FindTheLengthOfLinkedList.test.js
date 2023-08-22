import lengthOfLinkedList from "./FindTheLengthOfLinkedList";
import LinkedList from "./SinglyLinkedList";

test("Find the Length of a Linked List", () => {
  let list = new LinkedList();
  list.insertAtHead(4);
  list.insertAtHead(3);
  list.insertAtHead(2);
  list.insertAtHead(1);
  list.insertAtHead(0);

  expect(lengthOfLinkedList(list)).toBe(5);

  expect(lengthOfLinkedList(null)).toBe(0);
});
