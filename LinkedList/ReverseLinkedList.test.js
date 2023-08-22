import reverseLinkedList from "./ReverseLinkedList";
import LinkedList from "./SinglyLinkedList";

test("Reverse a Linked List", () => {
  let list = new LinkedList();
  list.insertAtHead(4);
  list.insertAtHead(9);
  list.insertAtHead(6);
  list.insertAtHead(1);
  list.insertAtHead(0);

  expect(list.getListStr()).toBe("0 -> 1 -> 6 -> 9 -> 4 -> null");

  const reversed = reverseLinkedList(list);
  expect(reversed.getListStr()).toBe("4 -> 9 -> 6 -> 1 -> 0 -> null");
});
