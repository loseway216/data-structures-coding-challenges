import BinarySearchTree from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  let BST;

  beforeEach(() => {
    BST = new BinarySearchTree(6);
    BST.insert(4);
    BST.insert(9);
    BST.insert(5);
    BST.insert(2);
    BST.insert(8);
    BST.insert(12);
    BST.insert(3);
    BST.insert(1);
    BST.insert(7);
  });

  test("search", () => {
    const node = BST.search(8);
    expect(node.value).toBe(8);

    const node2 = BST.search(99);
    expect(node2).toBe(null);
  });

  test("delete a null node", () => {
    const result = BST.delete(null, 6);
    expect(result).toBe(false);
  });

  test("delete a non-existent node", () => {
    const result = BST.delete(BST.root, 99);
    expect(result).toBe(false);
  });

  test("delete a leaf node", () => {
    const result = BST.delete(BST.root, 1);
    expect(result).toBe(true);
  });

  test("delete a leaf with a left node only", () => {
    const result = BST.delete(BST.root, 8);
    expect(result).toBe(true);

    const node = BST.search(9);
    expect(node.leftChild.value).toBe(7);
  });

  test("delete a leaf with a right node only", () => {
    const result = BST.delete(BST.root, 4);
    expect(result).toBe(true);

    const node = BST.search(6);
    expect(node.leftChild.value).toBe(5);
  });

  test("delete a node with 2 children", () => {
    const result = BST.delete(BST.root, 4);
    expect(result).toBe(true);

    const node = BST.search(5);
    expect(node.leftChild.value).toBe(2);
    expect(node.rightChild).toBe(null);
  });
});
