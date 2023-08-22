import detectLoop from "./DetectLoop";
import LinkedList from "./SinglyLinkedList";

test("Detect a Loop in a Linked List", () => {
  let list = new LinkedList();

  list.insertAtHead(21);
  list.insertAtHead(14);
  list.insertAtHead(7);

  let head = list.getHead();
  let node = list.getHead();

  // Adding a loop
  for (var i = 0; i < 4; i++) {
    if (node.next == null) {
      node.next = head.next;
      break;
    }
    node = node.next;
  }

  expect(detectLoop(list)).toBe(true);
});
