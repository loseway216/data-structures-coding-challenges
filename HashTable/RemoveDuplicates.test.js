import LinkedList from "../LinkedList/SinglyLinkedList";
import removeDuplicates from "./RemoveDuplicates";

describe("Remove Duplicates from a Linked List", () => {
  test("should remove duplicates from a linked list", () => {
    const list = new LinkedList();

    list.insertAtHead(21);
    list.insertAtHead(14);
    list.insertAtHead(11);
    list.insertAtHead(14);
    list.insertAtHead(7);
    list.insertAtHead(21);

    expect(removeDuplicates(list).getListStr()).toBe(
      "21 -> 7 -> 14 -> 11 -> null"
    );
  });
});
