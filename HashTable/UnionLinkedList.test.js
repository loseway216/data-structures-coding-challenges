import LinkedList from "../LinkedList/SinglyLinkedList";
import unionList from "./UnionLinkedList";

describe("Union of two linked lists", () => {
  test("should return union of two linked lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insertAtHead(8);
    list1.insertAtHead(22);
    list1.insertAtHead(15);

    list2.insertAtHead(21);
    list2.insertAtHead(14);
    list2.insertAtHead(22);

    expect(unionList(list1, list2).getListStr()).toBe(
      "22 -> 21 -> 15 -> 14 -> 8 -> null"
    );
  });
});
