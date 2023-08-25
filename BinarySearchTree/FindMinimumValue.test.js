import BinarySearchTree from "./BinarySearchTree";
import findMinimumValue from "./FindMinimumValue";

describe("Find Minimum Value in a Binary Search Tree", () => {
  test("findMinimumValue", () => {
    const bst = new BinarySearchTree(4);
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    bst.insert(6);
    bst.insert(5);
    expect(findMinimumValue(bst.root)).toBe(1);
  });
});
