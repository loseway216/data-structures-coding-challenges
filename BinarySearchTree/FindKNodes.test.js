import BinarySearchTree from "./BinarySearchTree";
import findKNodes from "./FindKNodes";

describe("Find Nodes at k Distance From the Root", () => {
  test("findKNodes", () => {
    const bst = new BinarySearchTree(6);
    bst.insert(4);
    bst.insert(9);
    bst.insert(2);
    bst.insert(5);
    bst.insert(8);
    bst.insert(12);
    bst.insert(10);
    bst.insert(14);
    expect(findKNodes(bst.root, 3)).toEqual([10, 14]);
  });
});
