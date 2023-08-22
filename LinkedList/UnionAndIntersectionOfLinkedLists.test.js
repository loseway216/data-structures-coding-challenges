import LinkedList from "./SinglyLinkedList";
import { intersection, union } from "./UnionAndIntersectionOfLinkedLists";

describe("Union & Intersection of Linked Lists", () => {
  test("union", () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insertAtHead(8);
    list1.insertAtHead(22);
    list1.insertAtHead(15);
    list1.insertAtHead(22);

    list2.insertAtHead(21);
    list2.insertAtHead(14);
    list2.insertAtHead(21);
    list2.insertAtHead(8);
    list2.insertAtHead(7);

    expect(union(list1, list2).getListStr()).toBe(
      "22 -> 15 -> 8 -> 7 -> 21 -> 14 -> null"
    );
  });

  test("intersection", () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insertAtHead(8);
    list1.insertAtHead(21);
    list1.insertAtHead(15);
    list1.insertAtHead(14);
    list1.insertAtHead(8);

    list2.insertAtHead(21);
    list2.insertAtHead(14);
    list2.insertAtHead(7);
    list2.insertAtHead(14);

    expect(intersection(list1, list2).getListStr()).toBe("14 -> 21 -> null");
  });
});
