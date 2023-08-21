import LinkedList from "./SinglyLinkedList";

describe("SinglyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.insertAtHead(2);
    list.insertAtHead(4);
    list.insertAtHead(5);
    list.insertAtHead(7);
    list.insertAtHead(1);

    // console.log(list.getListStr());
  });

  test("insertAtHead", () => {
    expect(list.getHead().data).toBe(1);
  });

  test("search", () => {
    expect(list.search(1)).toBe(true);
    expect(list.search(0)).toBe(false);

    list.insertAtTail(6);
    expect(list.search(6)).toBe(true);
  });

  test("deleteVal", () => {
    expect(list.search(2)).toBe(true);
    list.deleteVal(2);
    expect(list.search(2)).toBe(false);
  });

  test("deleteAtTail", () => {
    list.deleteAtTail();
    list.deleteAtTail();
    list.deleteAtTail();
    list.deleteAtTail();
    list.deleteAtTail();
    expect(list.isEmpty()).toBe(true);
  });
});
