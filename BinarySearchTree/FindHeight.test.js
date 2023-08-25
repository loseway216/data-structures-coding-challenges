import BinarySearchTree from "./BinarySearchTree";
import findHeight from "./FindHeight";

describe("Find the Height of a BST", () => {
  test("findHeight", () => {
    const bst = new BinarySearchTree(6);
    bst.insert(4);
    bst.insert(9);
    bst.insert(2);
    bst.insert(5);
    bst.insert(8);
    bst.insert(12);
    bst.insert(10);
    bst.insert(14);
    expect(findHeight(bst.root)).toBe(3);
  });
});
