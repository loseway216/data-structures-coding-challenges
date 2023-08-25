import BinarySearchTree from "./BinarySearchTree";
import findKthMaximumValue from "./FindKthMaximumValue";

describe("Find the kth Maximum Value in a Binary Search Tree", () => {
  test("findKthMaximumValue", () => {
    const bst = new BinarySearchTree(6);
    bst.insert(4);
    bst.insert(9);
    bst.insert(2);
    bst.insert(5);
    bst.insert(8);
    bst.insert(12);
    bst.insert(10);
    bst.insert(14);
    expect(findKthMaximumValue(bst.root, 3)).toBe(10);
  });
});
