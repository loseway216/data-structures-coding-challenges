import BinarySearchTree from "./BinarySearchTree";
import findAncestors from "./FindAncestors";

describe("Find Ancestors of a Node in a Binary Search Tree", () => {
  test("findAncestors", () => {
    const bst = new BinarySearchTree(6);
    bst.insert(4);
    bst.insert(9);
    bst.insert(2);
    bst.insert(5);
    bst.insert(8);
    bst.insert(12);
    bst.insert(10);
    bst.insert(14);
    expect(findAncestors(bst.root, 10)).toEqual([12, 9, 6]);
  });
});
