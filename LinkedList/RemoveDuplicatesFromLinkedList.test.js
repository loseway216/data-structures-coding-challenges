import removeDuplicates from "./RemoveDuplicatesFromLinkedList";
import LinkedList from "./SinglyLinkedList";

test("Remove Duplicates from Linked List", () => {
  const list = new LinkedList();
  list.insertAtHead(7);
  list.insertAtHead(7);
  list.insertAtHead(7);
  list.insertAtHead(22);
  list.insertAtHead(14);
  list.insertAtHead(21);
  list.insertAtHead(14);
  list.insertAtHead(7);

  expect(removeDuplicates(list).getListStr()).toBe(
    "7 -> 14 -> 21 -> 22 -> null"
  );
});
